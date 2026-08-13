import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about.html", destination: "/about/", permanent: true },
      { source: "/contact.html", destination: "/contact/", permanent: true },
      { source: "/contact-us.html", destination: "/contact/", permanent: true },
      { source: "/faq.html", destination: "/faq/", permanent: true },
      { source: "/blog.html", destination: "/blog/", permanent: true },
      { source: "/franchise.html", destination: "/franchise/", permanent: true },
      { source: "/memberships.html", destination: "/memberships/", permanent: true },
      { source: "/refund-policy.html", destination: "/refund-policy/", permanent: true },
      { source: "/thankyou.html", destination: "/thankyou/", permanent: true },
      { source: "/error.html", destination: "/error/", permanent: true },
      { source: "/contact.php", destination: "/contact/", permanent: true },
      { source: "/recovery.html", destination: "/health-optimisation-longevity/", permanent: true },
      {
        source: "/categories/recovery-longevity.html",
        destination: "/health-optimisation-longevity/",
        permanent: true,
      },
      {
        source: "/categories/weight-loss-transformation.html",
        destination: "/health-optimisation-longevity/",
        permanent: true,
      },
      {
        source: "/categories/aesthetic-skin-rejuvenation.html",
        destination: "/beauty/",
        permanent: true,
      },
      {
        source: "/categories/iv-drips-cellular-wellness.html",
        destination: "/iv-drip-therapy/",
        permanent: true,
      },
      {
        source: "/categories/luxury-spa-relaxation.html",
        destination: "/sports-recovery-performance/",
        permanent: true,
      },
      { source: "/biohack.html", destination: "/health-optimisation-longevity/", permanent: true },
      { source: "/iv-drip.html", destination: "/iv-drip-therapy/", permanent: true },
      { source: "/spa-services.html", destination: "/sports-recovery-performance/", permanent: true },
      { source: "/aesthetic.html", destination: "/beauty/", permanent: true },
      { source: "/aesthetic-rejuvenation.html", destination: "/beauty/", permanent: true },
      {
        source: "/weight-loss-transformation.html",
        destination: "/health-optimisation-longevity/",
        permanent: true,
      },
      { source: "/cryotherapy-in-mumbai.html", destination: "/cryotherapy/", permanent: true },
      { source: "/infrared-therapy.html", destination: "/infrared-sauna/", permanent: true },
      { source: "/services/cryotherapy.html", destination: "/cryotherapy/", permanent: true },
      { source: "/services/red-light-therapy.html", destination: "/red-light-therapy/", permanent: true },
      {
        source: "/services/compression-therapy.html",
        destination: "/compression-therapy/",
        permanent: true,
      },
      { source: "/services/infrared-therapy.html", destination: "/infrared-sauna/", permanent: true },
      { source: "/locations/santacruz.html", destination: "/locations/santacruz/", permanent: true },
      { source: "/locations/borivali.html", destination: "/locations/borivali/", permanent: true },
      { source: "/locations/andheri.html", destination: "/locations/andheri/", permanent: true },
    ];
  },
};

export default nextConfig;
