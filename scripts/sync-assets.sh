#!/usr/bin/env bash
# Upload local videos to the public S3 media bucket.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

AWS_PROFILE="${AWS_PROFILE:-epsom}"
AWS_REGION="${AWS_REGION:-ap-south-1}"
BUCKET="${ASSET_BUCKET:-epsom-wellness-media-279425763584}"

if ! aws sts get-caller-identity --profile "$AWS_PROFILE" >/dev/null 2>&1; then
  echo "AWS profile '$AWS_PROFILE' is not logged in. Run: aws login --profile $AWS_PROFILE --region $AWS_REGION"
  exit 1
fi

echo "Syncing public/*.mp4 to s3://${BUCKET} ..."
aws s3 sync "$ROOT/public" "s3://${BUCKET}" \
  --exclude "*" \
  --include "*.mp4" \
  --include "*.mov" \
  --cache-control "public, max-age=31536000, immutable" \
  --content-type "video/mp4" \
  --profile "$AWS_PROFILE" \
  --region "$AWS_REGION"

echo
echo "Base URL: https://${BUCKET}.s3.${AWS_REGION}.amazonaws.com"
