export interface FaqItem {
  question: string;
  answer: string;
  lang?: 'en' | 'no';
}

export interface FaqCategorySection {
  id: string;
  category: string;
  badge: string;
  description: string;
  lang: 'en' | 'no';
  market: 'global' | 'norway';
  items: FaqItem[];
}

// ── 1. Global & European Core FAQs (18 Q&As Across 4 Categories) ──
export const globalFaqSections: FaqCategorySection[] = [
  {
    id: 'pricing-budget',
    category: 'Pricing & Budget',
    badge: '01 // PRICING & BUDGET',
    description: 'Clear, deliverable-based pricing with no hidden costs or recurring traps.',
    lang: 'en',
    market: 'global',
    items: [
      {
        question: 'How much does a website cost in Malta?',
        answer:
          'ZURVIX websites start from €300 for a single-page or small business site, with full custom platforms typically ranging from €800–€1,500 depending on pages, integrations, and design complexity. Ecommerce and multi-language builds cost more due to payment gateway setup, product catalog structure, and additional testing. Every quote is itemized by deliverable, not a single lump sum.',
        lang: 'en',
      },
      {
        question: 'How much does a mobile app cost?',
        answer:
          'Mobile app development at ZURVIX starts from €500 for a cross-platform app covering both iOS and Android, rising based on backend complexity, third-party integrations (payments, maps, push notifications), and admin panel requirements. A combined website + app bundle starts from €800.',
        lang: 'en',
      },
      {
        question: 'How much does SEO cost for a small business?',
        answer:
          'SEO pricing depends on competitiveness of your market and whether it\'s a one-time technical setup or an ongoing monthly service. A technical SEO foundation (on-page optimization, schema markup, sitemap, Search Console setup) is typically a fixed one-time cost, while content and link-building work is usually billed monthly as a retainer.',
        lang: 'en',
      },
      {
        question: 'Are there hidden fees or recurring costs?',
        answer:
          'No — ZURVIX publishes starting prices for every service and breaks quotes down by deliverable before work begins. The only recurring costs are optional: hosting renewal, domain renewal, and ongoing maintenance/support plans, which are quoted separately and clearly upfront.',
        lang: 'en',
      },
      {
        question: 'What determines whether my project costs more or less than the starting price?',
        answer:
          'Price moves based on number of pages/screens, custom functionality (booking systems, dashboards, payment integrations), content volume you need written, and timeline urgency. A discovery call before any quote pins down these variables so the number you receive is accurate, not a placeholder.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'timeline-process',
    category: 'Timeline & Process',
    badge: '02 // TIMELINE & PROCESS',
    description: 'Structured 4-stage engineering workflow with milestone approvals.',
    lang: 'en',
    market: 'global',
    items: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'A standard business website typically takes 2–4 weeks from kickoff to launch. Ecommerce stores and custom web applications take 4–8 weeks depending on the number of integrations and content readiness on the client side.',
        lang: 'en',
      },
      {
        question: 'How long does it take to build a mobile app?',
        answer:
          'A cross-platform mobile app (iOS + Android) generally takes 6–10 weeks, covering design, development, testing, and app store submission. Timelines extend for apps requiring custom backend infrastructure or complex third-party integrations like payments or real-time messaging.',
        lang: 'en',
      },
      {
        question: 'What does the process look like from start to finish?',
        answer:
          'The process runs through four stages: discovery and scoping, UI/UX design, development and testing, then launch and handover. Clients review and approve work at each stage before the next begins, so there are no surprises at delivery.',
        lang: 'en',
      },
      {
        question: 'Do I need to provide content, or does the agency write it?',
        answer:
          'Clients can provide their own copy and images, or ZURVIX can write website copy as part of the package. Either way, content readiness is usually the single biggest factor affecting whether a project finishes on time.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'ownership-tech-maintenance',
    category: 'Ownership, Tech & Maintenance',
    badge: '03 // OWNERSHIP & TECH',
    description: '100% source code ownership, zero vendor lock-in, modern scalable stack.',
    lang: 'en',
    market: 'global',
    items: [
      {
        question: 'Who owns the website after it\'s built?',
        answer:
          'The client owns 100% of the source code, design files, and domain once the final payment is made — there is no vendor lock-in. This is stated explicitly in every proposal, not left as an assumption.',
        lang: 'en',
      },
      {
        question: 'What happens if I want to switch developers or agencies later?',
        answer:
          'Because you own the full source code and hosting/domain access, you can move to any developer or agency at any time without needing permission or paying an exit fee. This is a standard, non-negotiable term.',
        lang: 'en',
      },
      {
        question: 'Do you offer ongoing maintenance and support?',
        answer:
          'Yes — maintenance plans cover uptime monitoring, security patching, backups, and speed tuning on a monthly retainer. Support is optional, not bundled into the one-time build price, so clients only pay for it if they want it.',
        lang: 'en',
      },
      {
        question: 'What platform or technology do you build on?',
        answer:
          'Websites are built on Next.js and React for speed and SEO performance, ecommerce runs on Shopify or custom Laravel-based systems depending on scale, and mobile apps use Flutter for a single cross-platform codebase covering iOS and Android. This keeps long-term maintenance costs lower than maintaining separate native codebases.',
        lang: 'en',
      },
      {
        question: 'Will my website be fast and mobile-friendly?',
        answer:
          'Yes — every build is tested against Google\'s Core Web Vitals (loading speed, interactivity, visual stability) before launch, and designed mobile-first since most traffic in Malta and Europe now comes from phones.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'seo-geo-ai-search',
    category: 'SEO, GEO & AI Search',
    badge: '04 // SEO, GEO & AI SEARCH',
    description: 'Optimized for traditional Google rankings and direct AI citations.',
    lang: 'en',
    market: 'global',
    items: [
      {
        question: 'What is the difference between SEO and GEO?',
        answer:
          'SEO (Search Engine Optimization) helps your website rank in traditional Google search results. GEO (Generative Engine Optimization) helps your business get mentioned and cited directly inside AI-generated answers from tools like ChatGPT, Perplexity, and Google AI Overviews. Both rely on the same foundation — clear, authoritative, well-structured content — but GEO adds specific formatting for AI extraction.',
        lang: 'en',
      },
      {
        question: 'Why does AI search (ChatGPT, Perplexity) matter for my business?',
        answer:
          'More people are asking AI tools direct questions instead of clicking through search results, which means a business invisible to AI platforms is losing a growing share of discovery traffic. Being cited inside an AI answer builds trust with a buyer before they\'ve even visited your website.',
        lang: 'en',
      },
      {
        question: 'How do you optimize a website for AI search engines?',
        answer:
          'GEO optimization includes structuring content in clear question-and-answer format, adding schema markup (FAQPage, Organization, Service) so AI systems can parse your business accurately, and publishing an llm.txt file that gives AI crawlers a direct, machine-readable summary of your site. ZURVIX implements all three as standard on every build.',
        lang: 'en',
      },
      {
        question: 'How long does SEO take to show results?',
        answer:
          'Technical SEO fixes (site speed, schema, indexing) can show measurable improvement within 2–4 weeks. Competitive keyword rankings and organic traffic growth typically take 3–6 months, since Google needs to trust a site\'s authority over time — anyone promising instant top rankings is not being straight with you.',
        lang: 'en',
      },
    ],
  },
];

// ── 2. Norway Market Expansion FAQs (56 Q&As in English & Norsk) ──
export const norwayFaqSections: FaqCategorySection[] = [
  {
    id: 'norway-market-entry-en',
    category: 'Norway Market Entry',
    badge: 'NORWAY // MARKET ENTRY',
    description: 'Remote high-performance engineering tailored for Norwegian businesses.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Does ZURVIX build websites for businesses in Norway?',
        answer:
          'Yes — ZURVIX builds websites, mobile apps, ecommerce stores, and SEO/GEO strategies for businesses in Norway, alongside clients in Malta and across Europe. Projects are delivered remotely, with the same Next.js, Flutter, and Laravel stack used for every ZURVIX client.',
        lang: 'en',
      },
      {
        question: 'Is ZURVIX based in Norway?',
        answer:
          'No — ZURVIX is based in Malta and works with clients across Europe, including Norway, entirely remotely. Remote delivery is standard in web/app development, so location doesn\'t limit project quality or communication.',
        lang: 'en',
      },
      {
        question: 'Can a web agency based outside Norway legally build and host a Norwegian business website?',
        answer:
          'Yes — there\'s no legal restriction on a foreign agency designing, developing, or hosting a website for a Norwegian business. The one exception is the .no domain itself: Norid (the Norwegian domain registry) requires the domain\'s registered owner to be a Norwegian-registered organisation or an individual with a Norwegian national ID and postal address, so that part must sit with the Norwegian client, not the agency.',
        lang: 'en',
      },
      {
        question: 'Do you offer support in Norwegian?',
        answer:
          'Yes — project communication, proposals, and support can be provided in Norwegian or English depending on client preference.',
        lang: 'en',
      },
      {
        question: 'What industries in Norway does ZURVIX work with?',
        answer:
          'ZURVIX works across retail and ecommerce, restaurants and hospitality, dental and healthcare clinics, real estate, law firms, construction and trades, tourism, and fitness businesses — the same range of industries served in Malta and Europe, applied to the Norwegian market.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'pricing-nok-en',
    category: 'Pricing in NOK (English)',
    badge: 'NORWAY // PRICING IN NOK',
    description: 'Lean agency pricing delivered in NOK without Norwegian agency overheads.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'How much does a website cost in Norway with ZURVIX?',
        answer:
          'ZURVIX websites start from roughly 3,400 NOK (€300) for a small business site, with full custom platforms typically ranging from 9,000–17,000 NOK (€800–€1,500). This is notably below the typical Norwegian market rate of 30,000–100,000 NOK for a comparable professional business site, because ZURVIX operates with a leaner, distributed team model rather than a traditional Norwegian agency overhead structure. (NOK figures are approximate and move with the EUR/NOK exchange rate — always confirm the current conversion.)',
        lang: 'en',
      },
      {
        question: 'Why is ZURVIX cheaper than typical Norwegian web design agencies?',
        answer:
          'The core work — design, development, hosting setup — is the same modern stack (Next.js, Flutter, Laravel) regardless of where the agency is based, but ZURVIX\'s lower overhead as a Malta-based, distributed-team agency allows lower starting prices than the 30,000–100,000 NOK typically charged by agencies operating with Norwegian office costs and staff salaries.',
        lang: 'en',
      },
      {
        question: 'Do your prices include Norwegian VAT (MVA)?',
        answer:
          'Prices are quoted before Norwegian MVA (25%) — confirm final invoicing terms during your consultation, since VAT treatment can depend on whether the client is a registered Norwegian business (B2B reverse charge may apply) or an individual.',
        lang: 'en',
      },
      {
        question: 'How much does an ecommerce store cost for a Norwegian business?',
        answer:
          'ZURVIX ecommerce builds start from around 6,900 NOK (€600) for a custom Shopify or WooCommerce store with payment integration — significantly below the 100,000–350,000 NOK typically charged by Norwegian agencies for a comparable custom store.',
        lang: 'en',
      },
      {
        question: 'How much does a mobile app cost for a Norwegian business?',
        answer:
          'Mobile app development starts from around 5,750 NOK (€500) for a cross-platform app (iOS and Android from a single Flutter codebase), rising with backend complexity and integrations like Vipps payments or booking systems.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'pricing-nok-no',
    category: 'Priser i NOK (Norsk)',
    badge: 'NORGE // PRISER I NOK',
    description: 'Oversikt over kostnader for nettsider, nettbutikker og apper i Norge.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Hva koster en nettside i Norge hos ZURVIX?',
        answer:
          'En nettside fra ZURVIX starter på rundt 3 400 kr (€300) for en enkel bedriftsside, og fulle skreddersydde løsninger ligger typisk mellom 9 000–17 000 kr (€800–€1 500). Dette er lavere enn det typiske norske markedet på 30 000–100 000 kr, fordi ZURVIX drives med et mer effektivt, distribuert team fremfor tradisjonell norsk byråstruktur.',
        lang: 'no',
      },
      {
        question: 'Er prisene inkludert MVA?',
        answer:
          'Prisene oppgis før norsk MVA (25 %) — de endelige faktureringsvilkårene avklares under konsultasjonen, siden MVA-behandlingen kan avhenge av om kunden er en registrert norsk bedrift eller privatperson.',
        lang: 'no',
      },
      {
        question: 'Hvor mye koster en nettbutikk for norske bedrifter?',
        answer:
          'En nettbutikk fra ZURVIX starter på rundt 6 900 kr (€600) for en skreddersydd Shopify- eller WooCommerce-løsning med betalingsintegrasjon, betydelig lavere enn de 100 000–350 000 kr norske byråer typisk tar for en tilsvarende løsning.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'domain-compliance-en',
    category: 'Domain, Compliance & Payments (English)',
    badge: 'NORWAY // COMPLIANCE & VIPPS',
    description: 'Norid rules, Vipps mobile payments, and GDPR compliance in Norway.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Can ZURVIX register a .no domain for my business?',
        answer:
          'No — Norid\'s rules require a .no domain\'s registered subscriber to be a Norwegian-registered organisation (with a Norwegian organisation number) or an individual with a Norwegian national ID and postal address. ZURVIX can guide you through registration and manage the technical setup once it\'s registered, but the legal ownership must sit with your Norwegian entity, not with ZURVIX.',
        lang: 'en',
      },
      {
        question: 'What is required to own a .no domain in Norway?',
        answer:
          'You need either a Norwegian organisation number registered in the Central Coordinating Register for Legal Entities (Brønnøysundregistrene), or, as an individual, a Norwegian national identity number and a Norwegian postal address. This is set by Norid, the official Norwegian domain registry, not by any web agency.',
        lang: 'en',
      },
      {
        question: 'Does ZURVIX integrate Vipps payment on Norwegian websites?',
        answer:
          'Yes — Vipps integration is available for Norwegian ecommerce and booking projects, alongside standard card payment gateways, since Vipps is the dominant mobile payment method in the Norwegian market.',
        lang: 'en',
      },
      {
        question: 'Is a ZURVIX-built website GDPR compliant for Norwegian and EU users?',
        answer:
          'Yes — Norway is part of the EEA and applies GDPR through its own Personal Data Act (personopplysningsloven), so websites are built with the same cookie consent, data handling, and privacy policy standards used for EU clients.',
        lang: 'en',
      },
      {
        question: 'Can you migrate my existing Norwegian website to a new platform?',
        answer:
          'Yes — ZURVIX handles migrations from WordPress, Wix, Squarespace, or other platforms to a modern Next.js or Laravel-based system, preserving existing content, SEO rankings, and .no domain configuration during the switch.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'domain-compliance-no',
    category: 'Domene, Lovverk & Betaling (Norsk)',
    badge: 'NORGE // VIPPS & DOMENE',
    description: '.no-domener, Vipps og GDPR etter norsk personopplysningslov.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Kan ZURVIX registrere .no-domene for min bedrift?',
        answer:
          'Nei — Norids regelverk krever at en registrant av et .no-domene enten er en norskregistrert organisasjon med organisasjonsnummer, eller en privatperson med norsk fødselsnummer og postadresse. ZURVIX kan veilede gjennom registreringen og håndtere det tekniske oppsettet, men selve eierskapet må ligge hos din norske virksomhet.',
        lang: 'no',
      },
      {
        question: 'Støtter dere Vipps-betaling på nettsiden?',
        answer:
          'Ja — Vipps-integrasjon er tilgjengelig for norske nettbutikk- og bookingprosjekter, i tillegg til vanlige kortbetalingsløsninger, siden Vipps er den dominerende mobilbetalingsmetoden i det norske markedet.',
        lang: 'no',
      },
      {
        question: 'Er nettsiden GDPR-kompatibel for norske brukere?',
        answer:
          'Ja — Norge er en del av EØS og følger GDPR gjennom personopplysningsloven, så nettsider bygges med samme krav til samtykke for informasjonskapsler, databehandling og personvernerklæring som for EU-kunder.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'industry-websites-en',
    category: 'Industry-Specific Websites (English)',
    badge: 'NORWAY // INDUSTRY SOLUTIONS',
    description: 'Custom setups for restaurants, clinics, real estate, law firms, and trades.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Do you build websites for Norwegian restaurants and cafes?',
        answer:
          'Yes — restaurant and cafe websites typically include a menu section, table booking or online ordering integration, and Google Business Profile optimization for local "restaurant near me" searches.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian dental clinics (tannlege)?',
        answer:
          'Yes — dental clinic websites are built with appointment booking, treatment information pages, and local SEO focused on the clinic\'s city or district for higher visibility in patient searches.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian real estate agents (eiendomsmegler)?',
        answer:
          'Yes — real estate websites include property listing pages, search/filter functionality, and integration options with Norwegian listing platforms like Finn.no where relevant.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian law firms (advokatfirma)?',
        answer:
          'Yes — law firm websites are built around practice area pages, team/attorney profiles, and a trust-focused design suited to a client base that researches carefully before making contact.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian construction and trades businesses (håndverker)?',
        answer:
          'Yes — trades and construction websites focus on service area pages, project galleries, and quote-request forms, since most leads in this sector come from local search rather than broad brand awareness.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian tourism and travel businesses (reiseliv)?',
        answer:
          'Yes — tourism websites are built with booking integrations, multi-language content (Norwegian, English, and other languages depending on target visitors), and image-heavy layouts suited to destination marketing.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian seafood and fishing industry businesses (sjømat/fiskeri)?',
        answer:
          'Yes — websites for seafood and fishing businesses typically emphasize traceability, certifications, and B2B-focused product/export information alongside standard company pages.',
        lang: 'en',
      },
      {
        question: 'Do you build websites for Norwegian gyms and fitness studios?',
        answer:
          'Yes — gym and fitness studio websites are built with class schedules, membership sign-up flows, and mobile-friendly booking, since most visitors check schedules from their phone before visiting.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'industry-websites-no',
    category: 'Bransjespesifikke Nettsider (Norsk)',
    badge: 'NORGE // BRANSJELØSNINGER',
    description: 'Skreddersydde nettsider for salonger, håndverkere og lokale bedrifter.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Bygger dere nettsider for frisører og skjønnhetssalonger?',
        answer:
          'Ja — nettsider for frisører og salonger bygges typisk med timebestilling, tjenesteoversikt og lokal SEO tilpasset salongens by eller bydel.',
        lang: 'no',
      },
      {
        question: 'Bygger dere nettsider for håndverkere og byggbedrifter?',
        answer:
          'Ja — nettsider for håndverkere fokuserer på tjenesteområder, prosjektgalleri og enkle tilbudsskjemaer, siden de fleste henvendelser i denne bransjen kommer fra lokale søk.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'mobile-apps-norway-en',
    category: 'Mobile Apps for the Norwegian Market (English)',
    badge: 'NORWAY // FLUTTER APPS',
    description: 'Cross-platform iOS and Android apps with Vipps & booking workflows.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Do Norwegian businesses need a mobile app or is a website enough?',
        answer:
          'For most small and medium Norwegian businesses, a fast, mobile-friendly website covers customer needs without the added cost of an app. An app becomes worth the investment when customers return frequently, need push notifications, or use loyalty/booking features regularly — otherwise a website is the more cost-effective starting point.',
        lang: 'en',
      },
      {
        question: 'Can you build a booking app for a Norwegian business?',
        answer:
          'Yes — booking apps (for salons, gyms, clinics, restaurants, or service businesses) are built as cross-platform Flutter apps with calendar sync, notifications, and optional payment or Vipps integration.',
        lang: 'en',
      },
      {
        question: 'How long does it take to build a mobile app for the Norwegian market?',
        answer:
          'A cross-platform mobile app typically takes 6–10 weeks from kickoff to app store submission, the same timeline as for any ZURVIX mobile project — market doesn\'t change the build timeline, only the content/localization work layered on top.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'mobile-apps-norway-no',
    category: 'Mobilapper for Norske Bedrifter (Norsk)',
    badge: 'NORGE // BOOKING & APPER',
    description: 'Kryssplattform apper med kalendersynkronisering og Vipps.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Kan dere lage en bookingapp for min bedrift?',
        answer:
          'Ja — bookingapper for salonger, treningssentre, klinikker eller andre tjenestebedrifter bygges som kryssplattform Flutter-apper med kalendersynkronisering, varsler og valgfri betalings- eller Vipps-integrasjon.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'seo-norway-en',
    category: 'SEO for the Norwegian Market (English)',
    badge: 'NORWAY // GOOGLE.NO SEO',
    description: 'Local Google.no optimization, Bokmål/Nynorsk, and Google Min bedrift.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'How does SEO work differently for the Norwegian market?',
        answer:
          'Norwegian SEO requires targeting Norwegian-language search terms (not direct English translations), optimizing for Google.no specifically, and building local relevance through Norwegian business directories and a fully set-up Google Business Profile — the technical fundamentals (site speed, schema, mobile-friendliness) are the same worldwide.',
        lang: 'en',
      },
      {
        question: 'Do you optimize websites for Bokmål and Nynorsk?',
        answer:
          'Yes — content and SEO can be built primarily in Bokmål (used by roughly 85–90% of Norwegians) with Nynorsk support added where a business\'s audience or region calls for it, such as parts of Western Norway.',
        lang: 'en',
      },
      {
        question: 'How much does SEO cost for a small business in Norway?',
        answer:
          'Norwegian agencies typically charge 3,000–8,000 NOK per month for ongoing SEO; ZURVIX offers a comparable technical SEO foundation as part of project packages, with ongoing content/GEO work available as an add-on retainer — ask for a specific quote based on your market\'s competitiveness.',
        lang: 'en',
      },
      {
        question: 'Do you optimize Google Business Profile (Google Min bedrift) for Norwegian companies?',
        answer:
          'Yes — Google Business Profile setup and optimization is included in local SEO work, since it directly affects visibility in Google Maps and "near me" searches, which drive a large share of local customer discovery in Norway.',
        lang: 'en',
      },
      {
        question: 'How long does SEO take to show results in the Norwegian market?',
        answer:
          'Technical SEO improvements can show measurable impact within 2–4 weeks; competitive Norwegian keyword rankings typically take 3–6 months to build, same as any market — Norway\'s smaller population means less overall search volume per keyword, but often less competition too, which can offset the smaller volume.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'seo-norway-no',
    category: 'SEO for det Norske Markedet (Norsk)',
    badge: 'NORGE // SØKEMOTOROPTIMALISERING',
    description: 'Synlighet på Google.no og Google Min bedrift for norske kunder.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Hvordan fungerer SEO for det norske markedet?',
        answer:
          'Norsk SEO krever målretting mot norske søkeord (ikke direkte oversettelser fra engelsk), optimalisering spesifikt for Google.no, og lokal relevans gjennom norske bedriftskataloger og en fullstendig oppsatt Google Min bedrift-profil.',
        lang: 'no',
      },
      {
        question: 'Optimaliserer dere for både bokmål og nynorsk?',
        answer:
          'Ja — innhold og SEO bygges hovedsakelig på bokmål, med støtte for nynorsk der målgruppen eller regionen tilsier det, for eksempel enkelte deler av Vestlandet.',
        lang: 'no',
      },
      {
        question: 'Hvor lang tid tar det før SEO gir resultater i Norge?',
        answer:
          'Tekniske SEO-forbedringer kan vise målbar effekt innen 2–4 uker, mens konkurransedyktige norske søkeordplasseringer typisk tar 3–6 måneder å bygge opp.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'geo-ai-norway-en',
    category: 'GEO / AI Search in Norway (English)',
    badge: 'NORWAY // AI SEARCH (GEO)',
    description: 'Optimizing Norwegian businesses to be cited in ChatGPT & Perplexity.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Do Norwegians use ChatGPT and AI search instead of Google?',
        answer:
          'AI tools like ChatGPT, Perplexity, and Google\'s AI Overviews are seeing rapidly growing use in Norway as elsewhere, particularly among younger and professional users who ask direct questions rather than browsing search results — a business invisible to these tools is missing a growing share of discovery.',
        lang: 'en',
      },
      {
        question: 'Can my Norwegian business appear in ChatGPT or Perplexity answers?',
        answer:
          'Yes — appearing in AI-generated answers (GEO) depends on having clear, well-structured, citable content about your business online, including your own website; ZURVIX builds this structure in as standard, including an llm.txt file that gives AI crawlers a direct summary of the business.',
        lang: 'en',
      },
      {
        question: 'What is GEO (Generative Engine Optimization) and does it work in Norwegian?',
        answer:
          'GEO is the practice of structuring content so AI systems can find, understand, and cite it in generated answers. It works in any language, including Norwegian — the same principles (clear Q&A structure, self-contained answers, schema markup) apply, though Norwegian-language AI training data is smaller than English, so having both Norwegian and English content can widen visibility.',
        lang: 'en',
      },
      {
        question: 'How does ZURVIX optimize a Norwegian website for AI search engines?',
        answer:
          'The same GEO approach used across ZURVIX projects applies: structured FAQ content in question-and-answer format, schema markup (FAQPage, Organization, Service), and an llm.txt/llm-full.txt file — built in both Norwegian and English where a business serves both audiences.',
        lang: 'en',
      },
      {
        question: 'Will AI search replace Google search for Norwegian consumers?',
        answer:
          'It\'s unlikely to fully replace Google search in the near term, but it\'s steadily capturing a growing share of how people find answers, especially for direct questions — treating GEO as a "nice to have" rather than planning for it now is a common mistake businesses are starting to correct.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'geo-ai-norway-no',
    category: 'GEO & AI-Søk i Norge (Norsk)',
    badge: 'NORGE // AI-SØK (CHATGPT & PERPLEXITY)',
    description: 'Slik blir din norske bedrift sitert og anbefalt av AI-motorer.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Kan bedriften min dukke opp i svar fra ChatGPT eller Perplexity?',
        answer:
          'Ja — å dukke opp i AI-genererte svar (GEO) avhenger av å ha tydelig, godt strukturert og siterbart innhold om bedriften på nett, inkludert egen nettside; ZURVIX bygger inn denne strukturen som standard, inkludert en llm.txt-fil som gir AI-søkeroboter et direkte sammendrag av bedriften.',
        lang: 'no',
      },
      {
        question: 'Hva er GEO (Generativ søkemotor-optimalisering)?',
        answer:
          'GEO handler om å strukturere innhold slik at AI-systemer kan finne, forstå og sitere det i genererte svar. Det fungerer på ethvert språk, inkludert norsk — samme prinsipper (tydelig spørsmål-og-svar-struktur, selvforklarende svar, schema-merking) gjelder, selv om norsk AI-treningsdata er mindre enn engelsk.',
        lang: 'no',
      },
    ],
  },
  {
    id: 'process-norway-en',
    category: 'Process, Language & Working Remotely (English)',
    badge: 'NORWAY // REMOTE DELIVERY & CET',
    description: 'Same CET time zone as Norway, bilingual communication, and smooth remote delivery.',
    lang: 'en',
    market: 'norway',
    items: [
      {
        question: 'Can I communicate with ZURVIX in Norwegian during my project?',
        answer:
          'Yes — proposals, project updates, and support can be handled in Norwegian or English based on your preference.',
        lang: 'en',
      },
      {
        question: 'What time zone does ZURVIX work in relative to Norway?',
        answer:
          'ZURVIX operates on Central European Time (CET), the same time zone as Norway, so there\'s no meaningful scheduling gap for calls or real-time communication.',
        lang: 'en',
      },
      {
        question: 'How do international agencies typically deliver projects for Norwegian clients?',
        answer:
          'Entirely remotely — discovery calls, design reviews, and handovers happen over video call and shared documents, the same workflow used for clients across Europe; a physical Norwegian office isn\'t required to deliver a Norwegian-market website well.',
        lang: 'en',
      },
      {
        question: 'Can you build a bilingual (Norwegian/English) website?',
        answer:
          'Yes — bilingual Norwegian/English websites are built with a language switcher and separate SEO-optimized content for each language, rather than a single page machine-translated into two languages, which performs poorly in search.',
        lang: 'en',
      },
    ],
  },
  {
    id: 'process-norway-no',
    category: 'Prosess & Samarbeid (Norsk)',
    badge: 'NORGE // SAMME TIDSSONE (CET)',
    description: 'Direkte kommunikasjon på norsk eller engelsk og tospråklige nettsider.',
    lang: 'no',
    market: 'norway',
    items: [
      {
        question: 'Kan jeg kommunisere med ZURVIX på norsk?',
        answer:
          'Ja — tilbud, prosjektoppdateringer og support kan håndteres på norsk eller engelsk, avhengig av hva du foretrekker.',
        lang: 'no',
      },
      {
        question: 'Kan dere lage en tospråklig nettside (norsk/engelsk)?',
        answer:
          'Ja — tospråklige nettsider bygges med språkvelger og separat SEO-optimalisert innhold for hvert språk, i stedet for én side som er maskinoversatt til to språk, noe som presterer dårlig i søk.',
        lang: 'no',
      },
    ],
  },
];

// ── 3. Top 15 Scoped Norway JSON-LD Questions (Exact Character-Matched) ──
export const top15NorwaySchemaQuestions: string[] = [
  'Does ZURVIX build websites for businesses in Norway?',
  'Can a web agency based outside Norway legally build and host a Norwegian business website?',
  'How much does a website cost in Norway with ZURVIX?',
  'Hva koster en nettside i Norge hos ZURVIX?',
  'Do your prices include Norwegian VAT (MVA)?',
  'Can ZURVIX register a .no domain for my business?',
  'Does ZURVIX integrate Vipps payment on Norwegian websites?',
  'Er nettsiden GDPR-kompatibel for norske brukere?',
  'How does SEO work differently for the Norwegian market?',
  'Do you optimize websites for Bokmål and Nynorsk?',
  'Can my Norwegian business appear in ChatGPT or Perplexity answers?',
  'Kan bedriften min dukke opp i svar fra ChatGPT eller Perplexity?',
  'Can I communicate with ZURVIX in Norwegian during my project?',
  'What time zone does ZURVIX work in relative to Norway?',
  'Can you build a bilingual (Norwegian/English) website?',
];
