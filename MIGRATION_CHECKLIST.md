# HTML → Next.js migration checklist

| Existing route | Next.js route | Migrated | SEO | Notes |
|----------------|---------------|----------|-----|-------|
| `/` (`index.html`) | `/` | yes | yes | Home + JSON-LD |
| `/about.html` | `/about/` | yes | yes | + redirect |
| `/contact.html` | `/contact/` | yes | yes | + redirect; API form |
| `/faq.html` | `/faq/` | yes | yes | + FAQPage schema |
| `/memberships.html` | `/memberships/` | yes | yes | |
| `/blog.html` | `/blog/` | yes | yes | |
| `/franchise.html` | `/franchise/` | yes | yes | |
| `/refund-policy.html` | `/refund-policy/` | yes | yes | |
| `/thankyou.html` | `/thankyou/` | yes | yes | |
| `/error.html` | `/error/` | yes | yes | |
| `/health-optimisation-longevity/` | `/health-optimisation-longevity/` | yes | yes | |
| `/pain-management/` | `/pain-management/` | yes | yes | |
| `/beauty/` | `/beauty/` | yes | yes | |
| `/sports-recovery-performance/` | `/sports-recovery-performance/` | yes | yes | |
| `/salon/` | `/salon/` | yes | yes | |
| 21 treatment stubs | `/[slug]/` | yes | yes | Flat URLs preserved |
| `/locations/santacruz/` | `/locations/santacruz/` | yes | yes | |
| `/locations/borivali/` | `/locations/borivali/` | yes | yes | |
| `/locations/andheri/` | `/locations/andheri/` | yes | yes | |
| `contact.php` | `/api/contact` | yes | n/a | Resend + env |

**Totals:** 39 content routes discovered → 39 migrated. Legacy HTML under `_archive/html/`.
