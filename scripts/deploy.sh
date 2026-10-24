#!/usr/bin/env bash
# Push main to AWS CodeCommit. Amplify auto-builds and deploys.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

AWS_PROFILE="${AWS_PROFILE:-epsom}"
AWS_REGION="${AWS_REGION:-ap-south-1}"
APP_ID="${AMPLIFY_APP_ID:-d1orepciiuthl3}"
REMOTE="${DEPLOY_REMOTE:-codecommit}"
BRANCH="${DEPLOY_BRANCH:-main}"
CODECOMMIT_URL="https://git-codecommit.${AWS_REGION}.amazonaws.com/v1/repos/epsom-wellness"

if [[ "$(git rev-parse --abbrev-ref HEAD)" != "$BRANCH" ]]; then
  echo "Checkout $BRANCH before deploying (current: $(git rev-parse --abbrev-ref HEAD))."
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is dirty. Commit or stash first, then rerun."
  git status -sb
  exit 1
fi

if ! aws sts get-caller-identity --profile "$AWS_PROFILE" >/dev/null 2>&1; then
  echo "AWS profile '$AWS_PROFILE' is not logged in. Run: aws login --profile $AWS_PROFILE --region $AWS_REGION"
  exit 1
fi

if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  git remote add "$REMOTE" "$CODECOMMIT_URL"
fi

echo "Pushing $BRANCH to $REMOTE..."
GIT_LFS_SKIP_PUSH=1 AWS_PROFILE="$AWS_PROFILE" git \
  -c "credential.helper=!aws --profile $AWS_PROFILE --region $AWS_REGION codecommit credential-helper \$@" \
  -c credential.UseHttpPath=true \
  push "$REMOTE" "$BRANCH"

echo
echo "Amplify will auto-build main. Latest jobs:"
aws amplify list-jobs \
  --app-id "$APP_ID" \
  --branch-name "$BRANCH" \
  --max-items 3 \
  --profile "$AWS_PROFILE" \
  --region "$AWS_REGION" \
  --query 'jobSummaries[].{id:jobId,status:status,commit:commitId,start:startTime}' \
  --output table

echo
echo "Live: https://www.epsomwellnessandlongevity.com"
echo "Preview: https://main.${APP_ID}.amplifyapp.com"
echo "Console: https://${AWS_REGION}.console.aws.amazon.com/amplify/apps/${APP_ID}"
