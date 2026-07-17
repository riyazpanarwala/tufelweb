import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { BRAND, CONTACT, SEO, SITE_URL, SOCIAL } from "../src/config.js";
import { SERVICES, getServicePath } from "../src/services.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const baseHtml = await readFile(path.join(distDir, "index.html"), "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#business`,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/img/logo.png`,
    image: `${SITE_URL}/img/hero-finance-advisory.jpg`,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1012, Shilp Epitome, Sindhu Bhavan Road, Bodakdev",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380054",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Ahmedabad" },
    sameAs: SOCIAL.map(({ href }) => href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax and compliance services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE_URL}${getServicePath(service)}`,
        },
      })),
    },
  };
}

function serviceSchema(service) {
  const business = localBusinessSchema();
  delete business["@context"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      {
        "@type": "Service",
        "@id": `${SITE_URL}${getServicePath(service)}#service`,
        name: service.title,
        description: service.desc,
        url: `${SITE_URL}${getServicePath(service)}`,
        serviceType: service.title,
        areaServed: { "@type": "City", name: "Ahmedabad" },
        provider: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };
}

const prerenderStyles = `
  <style id="seo-prerender-style">
    .seo-prerender{max-width:1120px;margin:0 auto;padding:48px 24px 64px;color:#17233c;font-family:Outfit,Arial,sans-serif}
    .seo-prerender h1{max-width:850px;margin:0 0 18px;font:700 clamp(2rem,5vw,4rem)/1.05 "Cormorant Garamond",serif}
    .seo-prerender h2{margin-top:42px;font:700 2rem/1.2 "Cormorant Garamond",serif}
    .seo-prerender p,.seo-prerender li{max-width:800px;line-height:1.7;color:#4b5568}
    .seo-prerender ul{padding-left:22px}.seo-prerender a{color:#173d6b}
    .seo-prerender__services{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;padding:0;list-style:none}
    .seo-prerender__services a{display:block;height:100%;padding:18px;border:1px solid #dfe4ea;border-radius:10px;text-decoration:none}
  </style>`;

function homeContent() {
  const serviceLinks = SERVICES.map(
    (service) => `
      <li><a href="${getServicePath(service)}"><strong>${escapeHtml(service.title)}</strong><br />${escapeHtml(service.desc)}</a></li>`,
  ).join("");

  return `
    <main class="seo-prerender" id="main-content">
      <header>
        <p>Trusted | Professional | Reliable</p>
        <h1>Tax, GST &amp; Accounting Consultants in Ahmedabad</h1>
        <p>Panarwala &amp; Associates provides accounting, taxation, corporate compliance and legal advisory support for individuals and businesses.</p>
      </header>
      <section aria-labelledby="services-heading">
        <h2 id="services-heading">Tax and compliance services</h2>
        <ul class="seo-prerender__services">${serviceLinks}</ul>
      </section>
      <section aria-labelledby="about-heading">
        <h2 id="about-heading">About Panarwala &amp; Associates</h2>
        <p>We combine practical experience with personal attention to help clients remain compliant, make informed financial decisions and grow with confidence.</p>
      </section>
      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact our Ahmedabad office</h2>
        <p>${escapeHtml(CONTACT.address)}<br /><a href="tel:+${CONTACT.phone}">${escapeHtml(CONTACT.phoneDisplay)}</a><br /><a href="mailto:${escapeHtml(CONTACT.email)}">${escapeHtml(CONTACT.email)}</a></p>
      </section>
    </main>`;
}

function serviceContent(service) {
  const items = service.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  return `
    <main class="seo-prerender" id="main-content">
      <nav aria-label="Breadcrumb"><a href="/">Home</a> / <span>${escapeHtml(service.title)}</span></nav>
      <article>
        <header>
          <p>Professional services in Ahmedabad</p>
          <h1>${escapeHtml(service.title)} in Ahmedabad</h1>
          <p>${escapeHtml(service.desc)} Panarwala &amp; Associates provides reliable, professional support tailored to your requirements.</p>
        </header>
        <section aria-labelledby="offerings-heading">
          <h2 id="offerings-heading">What we offer</h2>
          <ul>${items}</ul>
        </section>
        <section aria-labelledby="consultation-heading">
          <h2 id="consultation-heading">Discuss your requirements</h2>
          <p>Contact our Ahmedabad office at <a href="tel:+${CONTACT.phone}">${escapeHtml(CONTACT.phoneDisplay)}</a> or <a href="mailto:${escapeHtml(CONTACT.email)}">${escapeHtml(CONTACT.email)}</a>.</p>
        </section>
      </article>
    </main>`;
}

function replaceMeta(html, attribute, key, content) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`, "i");
  return html.replace(pattern, `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`);
}

function buildPage({ title, description, canonical, type, schema, content }) {
  let html = baseHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${canonical}" />`);
  html = replaceMeta(html, "name", "description", description);
  html = replaceMeta(html, "property", "og:type", type);
  html = replaceMeta(html, "property", "og:title", title);
  html = replaceMeta(html, "property", "og:description", description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "name", "twitter:title", title);
  html = replaceMeta(html, "name", "twitter:description", description);
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`,
  );
  html = html.replace("</head>", `${prerenderStyles}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  return html;
}

const homeHtml = buildPage({
  title: SEO.title,
  description: SEO.description,
  canonical: `${SITE_URL}/`,
  type: "website",
  schema: localBusinessSchema(),
  content: homeContent(),
});
await writeFile(path.join(distDir, "index.html"), homeHtml, "utf8");

for (const service of SERVICES) {
  const routePath = getServicePath(service);
  const canonical = `${SITE_URL}${routePath}`;
  const title = service.seoTitle;
  const description = `${service.desc} Professional support from Panarwala & Associates in Ahmedabad.`;
  const outputDir = path.join(distDir, "services", service.slug);
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    path.join(outputDir, "index.html"),
    buildPage({
      title,
      description,
      canonical,
      type: "article",
      schema: serviceSchema(service),
      content: serviceContent(service),
    }),
    "utf8",
  );
}

const lastModified = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Kolkata",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());
const sitemapUrls = [`${SITE_URL}/`, ...SERVICES.map((service) => `${SITE_URL}${getServicePath(service)}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${url}</loc><lastmod>${lastModified}</lastmod></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

console.log(`Generated SEO HTML for ${SERVICES.length + 1} routes.`);
