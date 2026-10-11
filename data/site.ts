export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  borderColorClass: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  accentColor: string;
  badgeBg: string;
}

export interface SolutionItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  bgClass: string;
  colSpanClass: string;
  imageKey: "residential" | "battery" | "commercial" | "service";
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  specs: string;
  location: string;
  savings: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  imageIndex: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links?: { label: string; href: string }[];
  contactInfo?: boolean;
}

export const siteData = {
  company: {
    name: "Solarshop",
    tagline: "Own your energy. Love your bill.",
    shortDescription:
      "Premium, trustworthy solar power and smart battery storage engineered for lifelong reliability and transparent return on investment.",
    logoPath: "/Likley_Logo.png",
    phone: "(08) 8345 7200",
    phoneHref: "tel:+61883457200",
    email: "hello@solarshop.com.au",
    emailHref: "mailto:hello@solarshop.com.au",
    address: "142 Greenhill Road, Unley SA 5061",
    hours: "Monday – Friday: 8:00 AM – 5:30 PM",
    abn: "ABN 48 102 938 471",
  },

  navigation: [
    { label: "Solutions", href: "#solutions" },
    { label: "Why Solarshop", href: "#why-solarshop" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
  ] as NavLink[],

  hero: {
    badge: "100% Accredited Australian Clean Energy",
    headlineStart: "Own your energy.",
    headlineAccent: "Love your bill.",
    lead: "We design, install, and support bespoke residential and commercial solar systems with smart battery storage. Built with Tier-1 components and backed by an industry-leading 25-year panel warranty.",
    primaryCta: {
      label: "Estimate your savings",
      href: "#calculator",
    },
    secondaryCta: {
      label: "Get a free quote",
      href: "#contact",
    },
  },

  trustStrip: [
    {
      title: "Certified installers",
      description: "CEC accredited master electricians",
      icon: "shield",
    },
    {
      title: "25-year panel warranty",
      description: "Linear performance guarantee",
      icon: "award",
    },
    {
      title: "Licensed & insured",
      description: "Full public liability & engineering",
      icon: "check",
    },
    {
      title: "Tier-one equipment",
      description: "Bloomberg Tier 1 modules only",
      icon: "sun",
    },
    {
      title: "Local after-sales care",
      description: "Direct in-house technician support",
      icon: "users",
    },
  ],

  calculator: {
    title: "Estimate your savings",
    subtitle: "Select your typical monthly power bill to see your projected energy independence.",
    minBill: 40,
    maxBill: 800,
    defaultBill: 280,
    step: 10,
    currency: "$",
    assumedCost: 14000,
    savingsFactor: 0.72,
    disclaimer:
      "Illustrative estimate based on typical daytime solar irradiation, 72% self-consumption/offset ratio, and a standard $14,000 turnkey residential system. Exact savings depend on roof orientation, shading, and local feed-in tariffs.",
  },

  solutions: {
    badge: "Engineered Solutions",
    heading: "Bespoke clean power systems built for your exact usage",
    subtitle:
      "Every building has unique sun exposure and energy consumption patterns. We match premium hardware to your real daily needs.",
    items: [
      {
        id: "residential",
        tag: "Homes & Families",
        title: "Residential Solar",
        description:
          "High-efficiency rooftop panels crafted for contemporary Australian homes. Cut your quarterly electricity bills and take charge of your household energy budget.",
        features: [
          "High-efficiency all-black modules",
          "Individual panel shade optimization",
          "Intuitive smartphone monitoring app",
        ],
        bgClass: "bg-sagetint text-ink",
        colSpanClass: "col-span-1 lg:col-span-4",
        imageKey: "residential",
      },
      {
        id: "battery",
        tag: "Energy Independence",
        title: "Battery Storage",
        description:
          "Capture excess solar power produced at midday and use it when the sun sets. Keeps essential circuits powered during grid outages.",
        features: [
          "Instant blackout transition (UPS)",
          "Time-of-use tariff scheduling",
          "Modular capacity expandable anytime",
        ],
        bgClass: "bg-goldtint text-ink",
        colSpanClass: "col-span-1 lg:col-span-2",
        imageKey: "battery",
      },
      {
        id: "commercial",
        tag: "Enterprise & Industry",
        title: "Commercial Solar",
        description:
          "Convert unutilized warehouse and commercial roof space into a major revenue-saving asset with accelerated tax depreciation.",
        features: [
          "High peak-demand shaving",
          "Three-phase industrial inverters",
          "Feasibility modeling & PPA options",
        ],
        bgClass: "bg-skytint text-ink",
        colSpanClass: "col-span-1 lg:col-span-2",
        imageKey: "commercial",
      },
      {
        id: "service",
        tag: "Lifelong Care",
        title: "Service & Monitoring",
        description:
          "Proactive digital system analytics, preventative safety checks, panel cleaning, and priority on-site servicing by our local technician fleet.",
        features: [
          "24/7 automated generation alerts",
          "Annual thermal imaging safety checks",
          "Fast warranty replacement processing",
        ],
        bgClass: "bg-claytint text-ink",
        colSpanClass: "col-span-1 lg:col-span-4",
        imageKey: "service",
      },
    ] as SolutionItem[],
  },

  whySolarshop: {
    badge: "The Solarshop Difference",
    heading: "Why homeowners & businesses trust Solarshop",
    lead:
      "For over a decade, we have remained independent and focused on quality. No pressure tactics, no confusing jargon, and zero sub-contracting.",
    stats: [
      {
        value: "1,200+",
        label: "Systems installed",
        description: "Powering homes, schools, and commercial enterprises across the region.",
        borderColorClass: "border-gold",
      },
      {
        value: "18 MW",
        label: "Clean energy deployed",
        description: "Generates millions of clean kWh while keeping utility bills low.",
        borderColorClass: "border-sage",
      },
      {
        value: "25 yrs",
        label: "Panel warranty",
        description: "Comprehensive 25-year manufacturer performance guarantee you can bank on.",
        borderColorClass: "border-sky",
      },
    ] as StatItem[],
    points: [
      {
        title: "Transparent feasibility modeling",
        description:
          "We examine your actual 12-month interval meter history to provide an honest, accurate yield projection before any paperwork is signed.",
      },
      {
        title: "Direct in-house electricians",
        description:
          "Every technician on your roof is a full-time, licensed Solarshop team member who respects your property.",
      },
      {
        title: "Tier-1 hardware only",
        description:
          "We exclusively deploy Bloomberg Tier 1 solar modules and globally trusted smart inverters built for extreme climates.",
      },
      {
        title: "Prompt local support",
        description:
          "Need assistance? You talk to an experienced solar specialist in our local office, not an overseas call center.",
      },
    ],
  },

  howItWorks: {
    badge: "Our Simple Process",
    heading: "From consultation to lifelong clean energy",
    subtitle: "A smooth four-step roadmap designed around clear communication and zero stress.",
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We review your energy usage, roof orientation, and future power plans (like EV charging) to understand your exact requirements.",
        accentColor: "text-forest",
        badgeBg: "bg-sagetint",
      },
      {
        number: "02",
        title: "Custom design",
        description:
          "Our solar engineers model 3D sun angles, simulate seasonal shade, and tailor a custom electrical layout for maximum efficiency.",
        accentColor: "text-gold",
        badgeBg: "bg-goldtint",
      },
      {
        number: "03",
        title: "Expert install",
        description:
          "Our accredited electricians complete your installation cleanly in a single day, adhering to strict safety and building standards.",
        accentColor: "text-sky",
        badgeBg: "bg-skytint",
      },
      {
        number: "04",
        title: "Lifelong care",
        description:
          "We handle all grid authority connection approvals, walk you through the mobile tracking app, and provide lifetime care.",
        accentColor: "text-clay",
        badgeBg: "bg-claytint",
      },
    ] as ProcessStep[],
  },

  projects: {
    badge: "Case Studies",
    heading: "Proven results across residential and commercial roofs",
    subtitle: "See how customized Solarshop systems are delivering clean, reliable electricity every day.",
    items: [
      {
        id: "project-hillside",
        title: "Hillside family home 8.4 kW",
        category: "Residential Solar & Storage",
        specs: "8.4 kW Array • 10 kWh Lithium Battery",
        location: "Adelaide Hills, SA",
        savings: "85% reduction in annual grid bills",
        description:
          "A multi-orientation residential rooftop array coupled with intelligent battery storage that runs the household through evenings and blackouts.",
        badgeBg: "bg-sagetint",
        badgeText: "text-forest",
        imageIndex: 0,
      },
      {
        id: "project-warehouse",
        title: "Warehouse rooftop array 120 kW",
        category: "Commercial Logistics Hub",
        specs: "120 kW High-Yield Commercial Array",
        location: "Wingfield Industrial Park",
        savings: "Payback achieved in 3.4 years",
        description:
          "A high-output commercial rooftop solar array offsetting heavy daytime machinery consumption and refrigeration loads.",
        badgeBg: "bg-skytint",
        badgeText: "text-sky",
        imageIndex: 1,
      },
      {
        id: "project-farm",
        title: "Farm ground-mount 60 kW",
        category: "Agricultural Enterprise",
        specs: "60 kW Ground Mount • Microinverters",
        location: "Barossa Valley, SA",
        savings: "Zero grid power during daytime irrigation",
        description:
          "A heavy-duty ground-mounted array optimized to power deep-well water pumps and winery cooling systems during peak summer rates.",
        badgeBg: "bg-claytint",
        badgeText: "text-clay",
        imageIndex: 2,
      },
    ] as ProjectItem[],
  },

  testimonial: {
    quote:
      "Solarshop gave us what three other companies couldn't: complete transparency. Our bill dropped from $840 down to $112 a quarter, and the installation team treated our home with incredible respect.",
    author: "Marcus & Elena Vance",
    role: "Homeowners in Stirling, SA",
    highlight: "8.4 kW system + 10 kWh battery • Installed 2024",
  },

  faq: {
    badge: "Common Questions",
    heading: "Everything you need to know about going solar",
    subtitle: "Got questions? We're here with straightforward, honest answers.",
    items: [
      {
        question: "How much will a solar and battery system actually save me?",
        answer:
          "Most residential clients save between 65% and 85% on their power bills. For a household spending $280 to $350 per month on electricity, an 8 kW system typically delivers around $2,400 to $3,000 in yearly savings. By adding battery storage, you can utilize clean solar power well past sunset and avoid paying peak evening utility tariffs.",
      },
      {
        question: "What happens on cloudy or rainy days?",
        answer:
          "Solar panels operate on daylight (photons), not direct heat. On overcast days, Tier-1 panels continue to generate between 20% and 40% of their rated output depending on cloud density. If your system is paired with a battery, your home automatically taps stored clean energy first before drawing any grid power.",
      },
      {
        question: "How does the 25-year warranty work if something breaks?",
        answer:
          "Our panels come with a 25-year performance warranty ensuring at least 84.8% of day-one output at year 25. Inverters carry 10 to 15-year comprehensive manufacturer warranties. Solarshop also provides an in-house 10-year workmanship guarantee. If a component underperforms, our local team handles the diagnostics and replacement directly—no dealing with overseas manufacturers.",
      },
      {
        question: "How long does the installation take, and will my power be cut off?",
        answer:
          "A typical residential installation (6.6 kW to 10 kW) is completed in a single day by our certified in-house electricians. Your mains power will only need to be turned off for roughly 1 to 2 hours while we safely connect the solar inverter to your main switchboard. We notify you well in advance to ensure minimal disruption.",
      },
    ] as FaqItem[],
  },

  contact: {
    badge: "Start Your Transition",
    heading: "Ready to own your energy? Let's build your custom solar quote.",
    subtitle:
      "Send us a quick message or upload your latest bill details. One of our clean energy engineers will prepare a transparent, obligation-free proposal tailored to your property.",
    interests: [
      "Residential Solar (Home)",
      "Battery Storage System",
      "Commercial Solar Array",
      "System Upgrade & Servicing",
      "General Inquiry",
    ] as string[],
  },

  footer: {
    copyright: "© 2026 Solarshop Australia Pty Ltd. All rights reserved.",
    disclaimer:
      "Electrical Contractor Licence: PGE 298412 • Clean Energy Council Approved Solar Retailer.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Residential Solar", href: "#solutions" },
          { label: "Battery Storage", href: "#solutions" },
          { label: "Commercial Arrays", href: "#solutions" },
          { label: "Maintenance & Care", href: "#solutions" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Why Solarshop", href: "#why-solarshop" },
          { label: "Our Process", href: "#how-it-works" },
          { label: "Recent Projects", href: "#projects" },
          { label: "Frequently Asked Questions", href: "#faq" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Savings Calculator", href: "#calculator" },
          { label: "Clean Energy Rebates", href: "#faq" },
          { label: "Warranty Information", href: "#why-solarshop" },
          { label: "Free System Assessment", href: "#contact" },
        ],
      },
      {
        title: "Get In Touch",
        contactInfo: true,
      },
    ] as FooterColumn[],
  },
};
