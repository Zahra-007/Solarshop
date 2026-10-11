export interface SiteImage {
  id: string;
  slot: string;
  title: string;
  url: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
  license: string;
  width: number;
  height: number;
  fallbackBg: string;
}

export const siteImages = {
  hero: {
    id: "hero-rooftop-sunlight",
    slot: "Hero Section Header Visual",
    title: "Sunlit Residential Solar Installation",
    url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern suburban family home with sleek rooftop solar panels basking in daylight",
    photographer: "Vivint Solar",
    sourceUrl: "https://unsplash.com/photos/1613665813446-82a78c468a1d",
    license: "Unsplash Free Commercial License",
    width: 1600,
    height: 1067,
    fallbackBg: "#dcebf3",
  },
  solutions: {
    residential: {
      id: "solution-residential-solar",
      slot: "Solutions Bento 1: Residential Solar",
      title: "Custom Residential Solar Array",
      url: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80",
      alt: "Pristine solar panels installed on architectural home roof under clear skies",
      photographer: "Vivint Solar",
      sourceUrl: "https://unsplash.com/photos/1592833159155-c62df1b65634",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#e6eed6",
    },
    battery: {
      id: "solution-battery-storage",
      slot: "Solutions Bento 2: Battery Storage",
      title: "Intelligent Home Battery Storage",
      url: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80",
      alt: "Compact next-generation wall-mounted solar battery energy management system",
      photographer: "Vivint Solar",
      sourceUrl: "https://unsplash.com/photos/1592861956120-e524fc739696",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#f8ebc4",
    },
    commercial: {
      id: "solution-commercial-array",
      slot: "Solutions Bento 3: Commercial Solar",
      title: "Commercial Industrial Solar Array",
      url: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
      alt: "Expansive commercial rooftop solar panel installation under clear sky",
      photographer: "Nuno Marques",
      sourceUrl: "https://unsplash.com/photos/1548337138-e87d889cc369",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#dcebf3",
    },
    service: {
      id: "solution-service-monitoring",
      slot: "Solutions Bento 4: Service & Monitoring",
      title: "Precision Diagnostic Solar Maintenance",
      url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      alt: "Accredited solar service technician checking inverter connections with precision tools",
      photographer: "Science in HD",
      sourceUrl: "https://unsplash.com/photos/1621905251189-08b45d6a269e",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#f0d9c4",
    },
  },
  projects: [
    {
      id: "project-hillside-home",
      slot: "Projects Card 1: Hillside Family Home",
      title: "Hillside Family Home 8.4 kW",
      url: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=80",
      alt: "Hillside private residence equipped with an 8.4 kW rooftop solar array",
      photographer: "Derek Sutton",
      sourceUrl: "https://unsplash.com/photos/1545208942-e1c9c916524b",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#e6eed6",
    },
    {
      id: "project-warehouse-array",
      slot: "Projects Card 2: Warehouse Rooftop Array",
      title: "Warehouse Rooftop Array 120 kW",
      url: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=80",
      alt: "Logistics warehouse roof covered with 120 kW commercial photovoltaic panels",
      photographer: "Markus Spiske",
      sourceUrl: "https://unsplash.com/photos/1624397640148-949b1732bb0a",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#dcebf3",
    },
    {
      id: "project-farm-ground-mount",
      slot: "Projects Card 3: Farm Ground-Mount",
      title: "Farm Ground-Mount 60 kW",
      url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      alt: "Agricultural acreage ground-mounted 60 kW solar installation surrounded by green pastures",
      photographer: "American Public Power Association",
      sourceUrl: "https://unsplash.com/photos/1497435334941-8c899ee9e8e9",
      license: "Unsplash Free Commercial License",
      width: 1200,
      height: 800,
      fallbackBg: "#f0d9c4",
    },
  ],
  testimonialWide: {
    id: "testimonial-scenic-solar",
    slot: "Testimonial Wide Visual Accent",
    title: "Clean Solar Energy In Natural Daylight",
    url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=80",
    alt: "Solar panels generating clean power in lush natural green surroundings",
    photographer: "Andreas Gücklhorn",
    sourceUrl: "https://unsplash.com/photos/1559302504-64aae6ca6b6d",
    license: "Unsplash Free Commercial License",
    width: 1600,
    height: 900,
    fallbackBg: "#f8ebc4",
  },
} as const;
