// =============================================================================
// TODO – PLACEHOLDERS FOR THE CLIENT TO FILL IN
// =============================================================================
// Before going live, search this file for every item below and replace it with
// real information supplied by the client:
//
//  1. [CLIENT PHONE]        – Business phone number
//  2. [CLIENT PHONE HREF]   – Phone number in tel: format, e.g. tel:1300000000
//  3. [CLIENT EMAIL]        – Contact / enquiry email address
//  4. [CLIENT EMAIL HREF]   – e.g. mailto:info@yourdomain.com
//  5. [CLIENT ADDRESS]      – Full street address
//  6. Projects section      – Replace the three generic project items with real
//                             project details (see "// replace with real client projects" comments)
//  7. Testimonial section   – Replace "Client stories coming soon." with a real quote
//  8. Stats / "Why" section – Replace Expertise / Trust / Quality blurbs if needed
// =============================================================================

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
    tagline: "Clean energy, built on trust.",
    shortDescription:
      "Solarshop is your partner for professional solar solutions. We help homes and businesses move to clean, reliable power with clear advice and expert service.",
    logoPath: "/Likley_Logo.png",
    phone: "[CLIENT PHONE]",
    phoneHref: "[CLIENT PHONE HREF]",
    email: "[CLIENT EMAIL]",
    emailHref: "[CLIENT EMAIL HREF]",
    address: "[CLIENT ADDRESS]",
    hours: "[CLIENT BUSINESS HOURS]",
    abn: "",
  },

  navigation: [
    { label: "Solutions", href: "#solutions" },
    { label: "Why Solarshop", href: "#why-solarshop" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Work", href: "#projects" },
    { label: "FAQ", href: "#faq" },
  ] as NavLink[],

  hero: {
    badge: "Solar solutions you can trust",
    headlineStart: "Clean energy,",
    headlineAccent: "built on trust.",
    lead: "Solarshop is your partner for professional solar solutions. We help homes and businesses move to clean, reliable power with clear advice and expert service.",
    primaryCta: {
      label: "Request a quote",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore solutions",
      href: "#solutions",
    },
  },

  trustStrip: [
    {
      title: "Expert solar advice",
      description: "Guidance tailored to your property and energy needs",
      icon: "shield",
    },
    {
      title: "Professional installation",
      description: "Carried out by qualified, experienced installers",
      icon: "award",
    },
    {
      title: "Reliable aftercare",
      description: "Ongoing support to keep your system performing",
      icon: "check",
    },
    {
      title: "Clear communication",
      description: "Straightforward information at every step",
      icon: "sun",
    },
  ],

  solutions: {
    badge: "Our Services",
    heading: "Solar solutions for every property",
    subtitle:
      "Whether you're a homeowner or a business, we design and install the right solar system for your needs.",
    items: [
      {
        id: "residential",
        tag: "Homes & Families",
        title: "Residential Solar",
        description:
          "We design and install solar systems for homes, helping families generate their own clean electricity and reduce their reliance on the grid.",
        features: [
          "Tailored system design for your home",
          "Quality panels and components",
          "Professional installation and handover",
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
          "Add battery storage to your solar system to store the energy you generate and use it when you need it most.",
        features: [
          "Store solar energy for use day or night",
          "Greater independence from the grid",
          "Scalable to suit your needs",
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
          "We help businesses make the most of their roof space with commercial solar installations designed for operational efficiency.",
        features: [
          "Custom design for commercial properties",
          "Suitable for a wide range of business types",
          "Professional project management",
        ],
        bgClass: "bg-skytint text-ink",
        colSpanClass: "col-span-1 lg:col-span-2",
        imageKey: "commercial",
      },
      {
        id: "service",
        tag: "Lifelong Care",
        title: "Service & Maintenance",
        description:
          "We provide ongoing service and maintenance to keep your solar system running safely and efficiently over the long term.",
        features: [
          "System health checks and inspections",
          "Fault diagnosis and repairs",
          "Performance monitoring support",
        ],
        bgClass: "bg-claytint text-ink",
        colSpanClass: "col-span-1 lg:col-span-4",
        imageKey: "service",
      },
    ] as SolutionItem[],
  },

  whySolarshop: {
    badge: "The Solarshop Difference",
    heading: "Why homes & businesses choose Solarshop",
    lead:
      "We are committed to honest advice, quality workmanship, and reliable support — from your first enquiry to long after installation.",
    stats: [
      {
        value: "Expertise",
        label: "Experienced team",
        description:
          "Our team brings knowledge and skill to every solar project, large or small.",
        borderColorClass: "border-gold",
      },
      {
        value: "Trust",
        label: "Honest advice",
        description:
          "We give you clear, straightforward information so you can make the right decision for your property.",
        borderColorClass: "border-sage",
      },
      {
        value: "Quality",
        label: "Lasting results",
        description:
          "We use quality equipment and professional installation practices to deliver reliable outcomes.",
        borderColorClass: "border-sky",
      },
    ] as StatItem[],
    points: [
      {
        title: "Tailored system design",
        description:
          "Every property is different. We take the time to understand your energy needs and design a system that suits your home or business.",
      },
      {
        title: "Professional installation",
        description:
          "Our qualified installers work safely and carefully, respecting your property throughout the process.",
      },
      {
        title: "Quality equipment",
        description:
          "We source reliable solar panels and components to give you a system built to last.",
      },
      {
        title: "Ongoing support",
        description:
          "We're here to help after installation. Contact us with questions or if you need service.",
      },
    ],
  },

  howItWorks: {
    badge: "Our Process",
    heading: "From consultation to clean energy",
    subtitle: "A simple, clear process designed to make going solar easy.",
    steps: [
      {
        number: "01",
        title: "Consultation",
        description:
          "We start with a conversation about your property, energy use, and goals to understand what you need.",
        accentColor: "text-forest",
        badgeBg: "bg-sagetint",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We design a solar system tailored to your property and requirements.",
        accentColor: "text-gold",
        badgeBg: "bg-goldtint",
      },
      {
        number: "03",
        title: "Installation",
        description:
          "Our qualified team installs your system professionally and safely.",
        accentColor: "text-sky",
        badgeBg: "bg-skytint",
      },
      {
        number: "04",
        title: "Support",
        description:
          "We're here to help after installation with any questions or ongoing service needs.",
        accentColor: "text-clay",
        badgeBg: "bg-claytint",
      },
    ] as ProcessStep[],
  },

  projects: {
    badge: "Our Work",
    heading: "Solar installations we're proud of",
    subtitle: "A selection of residential, commercial and agricultural projects completed by our team.",
    items: [
      // replace with real client projects
      {
        id: "project-residential",
        title: "Residential installation",
        category: "Residential Solar",
        specs: "",
        location: "",
        savings: "",
        description:
          "A rooftop solar installation completed for a family home, designed to suit the property's energy needs.",
        badgeBg: "bg-sagetint",
        badgeText: "text-forest",
        imageIndex: 0,
      },
      // replace with real client projects
      {
        id: "project-commercial",
        title: "Commercial installation",
        category: "Commercial Solar",
        specs: "",
        location: "",
        savings: "",
        description:
          "A commercial rooftop solar system installed to help a business reduce its energy costs.",
        badgeBg: "bg-skytint",
        badgeText: "text-sky",
        imageIndex: 1,
      },
      // replace with real client projects
      {
        id: "project-agricultural",
        title: "Agricultural installation",
        category: "Agricultural Solar",
        specs: "",
        location: "",
        savings: "",
        description:
          "A ground-mounted solar installation designed to support the energy needs of an agricultural property.",
        badgeBg: "bg-claytint",
        badgeText: "text-clay",
        imageIndex: 2,
      },
    ] as ProjectItem[],
  },

  testimonial: {
    // TODO: Replace with a real client quote when available
    quote: "Client stories coming soon.",
    author: "",
    role: "Verified customer",
    highlight: "",
  },

  faq: {
    badge: "Common Questions",
    heading: "Everything you need to know about going solar",
    subtitle: "Got questions? We're here with straightforward, honest answers.",
    items: [
      {
        question: "How do I know if solar is right for my property?",
        answer:
          "Every property is different, and the best way to find out is to speak with us. We'll assess your roof, energy use, and circumstances to give you honest, no-pressure advice. Contact us for details specific to your property.",
      },
      {
        question: "What happens on cloudy or overcast days?",
        answer:
          "Solar panels continue to generate electricity in cloudy conditions, though output will vary. We'll explain what to expect for your location during the consultation. Contact us for details specific to your property.",
      },
      {
        question: "What does the installation process involve?",
        answer:
          "Once your system is designed and approved, our qualified team will carry out the installation professionally and safely. We'll keep you informed throughout the process and walk you through the system at handover.",
      },
      {
        question: "What support is available after installation?",
        answer:
          "We offer ongoing service and maintenance to keep your system in good shape. If you have questions or need assistance at any point, our team is here to help. Contact us for details specific to your situation.",
      },
    ] as FaqItem[],
  },

  contact: {
    badge: "Get In Touch",
    heading: "Ready to explore solar? Let's have a conversation.",
    subtitle:
      "Send us a message and one of our team will be in touch to discuss your property and options — no obligation, no pressure.",
    interests: [
      "Residential Solar (Home)",
      "Battery Storage System",
      "Commercial Solar",
      "Service & Maintenance",
      "General Enquiry",
    ] as string[],
  },

  footer: {
    copyright: "© Solarshop. All rights reserved.",
    disclaimer: "Licensed & insured solar installers.",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Residential Solar", href: "#solutions" },
          { label: "Battery Storage", href: "#solutions" },
          { label: "Commercial Solar", href: "#solutions" },
          { label: "Service & Maintenance", href: "#solutions" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Why Solarshop", href: "#why-solarshop" },
          { label: "Our Process", href: "#how-it-works" },
          { label: "Our Work", href: "#projects" },
          { label: "Frequently Asked Questions", href: "#faq" },
        ],
      },
      {
        title: "Get Started",
        links: [
          { label: "Request a Quote", href: "#contact" },
          { label: "Explore Solutions", href: "#solutions" },
          { label: "Contact Us", href: "#contact" },
        ],
      },
      {
        title: "Get In Touch",
        contactInfo: true,
      },
    ] as FooterColumn[],
  },
};
