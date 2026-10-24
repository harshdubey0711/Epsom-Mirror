# Deploy notes (AWS Amplify)

Production is **AWS Amplify**, not Vercel and not GitHub Pages.

| Item | Value |
|---|---|
| Live site | https://www.epsomwellnessandlongevity.com |
| Amplify preview | https://main.d1orepciiuthl3.amplifyapp.com |
| AWS account | `279425763584` (profile **`epsom`** only — not BookMySpa) |
| Region | `ap-south-1` |
| Amplify app | `epsom-wellness` (`d1orepciiuthl3`) |
| Source | CodeCommit `epsom-wellness` |
| Auto-deploy branch | `main` |
| Build spec | [`amplify.yml`](../amplify.yml) |

Pushing `main` to **CodeCommit** starts a build. Pushing to GitHub (`origin`) does not.

## Deploy

1. Edit locally, check `npm run dev`.
2. Commit on `main` (never commit `.env.local`).
3. Run:

```bash
./scripts/deploy.sh
```

or:

```bash
npm run deploy
```

The script refuses a dirty tree, uses AWS profile `epsom`, pushes `main` to `codecommit`, and prints recent Amplify jobs.

First-time AWS login:

```bash
aws login --profile epsom --region ap-south-1
```

Manual push (same as the script):

```bash
GIT_LFS_SKIP_PUSH=1 git \
  -c 'credential.helper=!aws --profile epsom --region ap-south-1 codecommit credential-helper $@' \
  -c credential.UseHttpPath=true \
  push codecommit main
```

## What Amplify runs

`amplify.yml`: install Git LFS if needed (pull is allowed to fail), `npm ci`, `npm run build`. Artifacts come from `.next` (Next.js SSR).

Watch a job:

```bash
aws amplify list-jobs \
  --app-id d1orepciiuthl3 \
  --branch-name main \
  --profile epsom \
  --region ap-south-1
```

Console: Amplify → **epsom-wellness** → **main**.

## Environment variables (Amplify, not git)

Set on the `main` branch in Amplify:

| Name | Purpose |
|---|---|
| `CONTACT_TO_EMAIL` | Inbox for contact / franchise forms |
| `CONTACT_FROM_EMAIL` | Verified Resend from-address |
| `RESEND_API_KEY` | Required in production or `/api/contact` returns 503 |
| `_BUILD_TIMEOUT` | `90` (minutes) |

Copy values from `.env.example`. Do not put secrets in the repo.

## Domain / DNS (GoDaddy)

Keep these records. Do **not** delete the ACM CNAME or SSL will fail to renew.

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `dsks6q2cgurwo.cloudfront.net` |
| CNAME | `_b545527d14df6dddf6b189ee7c1be098` | `_210c66be2cc5f3926966dfa1ae0b2ea0.wzccmgtwzk.acm-validations.aws.` |

Apex `epsomwellnessandlongevity.com` uses GoDaddy **Forwarding** (302) to `https://www.epsomwellnessandlongevity.com`. That can take up to an hour (sometimes 48 hours) to show everywhere.

## Remotes

| Remote | URL | Used for |
|---|---|---|
| `codecommit` | `https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/epsom-wellness` | Production deploys |
| `origin` | `https://github.com/harshdubey0711/Epsom-Mirror.git` | Upstream clone only |

Local `main` tracks `codecommit/main`.

## Videos / Git LFS

Large `.mp4` files are Git LFS on GitHub. CodeCommit does not host those LFS objects, so Amplify may ship LFS pointer files instead of real videos. `GIT_LFS_SKIP_PUSH=1` avoids a failed LFS upload on deploy. To fix missing videos later, put them on S3/CloudFront or reconnect Amplify to a GitHub repo with LFS.
