// Generated from handoff/content.json — edit copy here, not in components.

export type IconName =
  | 'box'
  | 'wrench'
  | 'message-circle'
  | 'package'
  | 'users'
  | 'megaphone'
  | 'smartphone'
  | 'globe'
  | 'search'
  | 'workflow';

export interface Link {
  label: string;
  href: string;
}

export interface Site {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  email: string;
  website: string;
  social: { instagram: string; facebook: string; linkedin: string };
  logoLight: string;
  logoDark: string;
}

export interface NavItem extends Link {
  n: string;
}

export interface Hero {
  eyebrow: string;
  titleLine1: string;
  titleLine2Lead: string;
  titleAccent: string;
  lead: string;
  ctaPrimary: Link;
  ctaSecondary: Link;
  image: string;
  statCard: { label: string; badge: string; value: string; suffix: string; initials: string[] };
  featureCard: { title: string; text: string };
  slides: number;
}

export interface NumberedItem {
  n: string;
  title: string;
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  titleAccent: string;
}

export interface About extends SectionHeading {
  body: string;
  image: string;
  imageBadge: string;
  points: NumberedItem[];
  stats: Stat[];
}

export interface ServiceItem extends NumberedItem {
  icon: IconName;
}

export interface Services extends SectionHeading {
  intro: string;
  items: ServiceItem[];
}

export interface Process extends SectionHeading {
  intro: string;
  image: string;
  imageStrip: string[];
  steps: NumberedItem[];
  whyTitle: string;
  why: { title: string; text: string }[];
}

export interface CommitmentCard {
  n: string;
  title: string;
  lead: string;
  variant: 'glass' | 'gold';
  items: string[];
}

export interface Commitment {
  eyebrow: string;
  quoteBefore: string;
  quoteAccent: string;
  quoteAfter: string;
  sub: string;
  cards: CommitmentCard[];
}

export type PortfolioCategory = 'Exhibitions' | 'Conferences' | 'Branding';
export type PortfolioFilter = 'All work' | PortfolioCategory;

export interface PortfolioItem {
  title: string;
  meta: string;
  image: string;
  alt: string;
  tall: boolean;
  category: PortfolioCategory;
}

export interface Portfolio extends SectionHeading {
  filters: PortfolioFilter[];
  items: PortfolioItem[];
}

export interface Clients extends SectionHeading {
  intro: string;
  names: string[];
}

export interface ContactField {
  id: string;
  label: string;
  type: 'text' | 'tel' | 'email';
  placeholder: string;
  required?: boolean;
}

export interface Contact extends SectionHeading {
  intro: string;
  formTitle: string;
  formSub: string;
  fields: ContactField[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  whatsappLabel: string;
}

export interface Footer {
  blurb: string;
  servicesLinks: string[];
  giantWord: string;
  copyright: string;
  motto: string;
}

export interface Content {
  site: Site;
  nav: NavItem[];
  hero: Hero;
  marquee: string[];
  about: About;
  services: Services;
  process: Process;
  commitment: Commitment;
  portfolio: Portfolio;
  clients: Clients;
  contact: Contact;
  footer: Footer;
}

export const content: Content = {
  site: {
    name: "Eleven Design Studio",
    tagline: "Events · Exhibitions · Graphics",
    address: "Dwarka, New Delhi, India",
    phone: "+91 81301 16560",
    phoneHref: "tel:+918130116560",
    whatsappHref: "https://wa.me/918130116560",
    email: "info@11designstudio.in",
    website: "https://www.11designstudio.in",
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#"
    },
    logoLight: "/images/logo-white.png",
    logoDark: "/images/logo-color.png"
  },
  nav: [
    {
      n: "01",
      label: "About",
      href: "#about"
    },
    {
      n: "02",
      label: "Services",
      href: "#services"
    },
    {
      n: "03",
      label: "Process",
      href: "#process"
    },
    {
      n: "04",
      label: "Portfolio",
      href: "#work"
    },
    {
      n: "05",
      label: "Clients",
      href: "#clients"
    },
    {
      n: "06",
      label: "Contact",
      href: "#contact"
    }
  ],
  hero: {
    eyebrow: "Events · Exhibitions · Graphics — New Delhi",
    titleLine1: "Turning ideas",
    titleLine2Lead: "into",
    titleAccent: "experiences",
    lead: "Exhibition stall design, fabrication and brand experiences — from first sketch to final installation, under one roof.",
    ctaPrimary: {
      label: "View our work",
      href: "#work"
    },
    ctaSecondary: {
      label: "Plan your stall",
      href: "#contact"
    },
    image: "/images/hero-booth.jpg",
    statCard: {
      label: "Brands served",
      badge: "Since day one",
      value: "22",
      suffix: "+",
      initials: [
        "NE",
        "TA",
        "FJ",
        "AU",
        "+18"
      ]
    },
    featureCard: {
      title: "Design + build",
      text: "One team, one roof"
    },
    slides: 3
  },
  marquee: [
    "DESIGN",
    "PLAN",
    "BUILD",
    "DELIVER",
    "EXHIBITIONS",
    "EVENTS",
    "GRAPHICS",
    "FABRICATION"
  ],
  about: {
    eyebrow: "About us",
    title: "We design. We build. We deliver",
    titleAccent: "experiences.",
    body: "Eleven Design Studio is a New Delhi–based creative design agency specialising in exhibition stall design, fabrication and brand experiences — innovative concepts, thoughtful design and seamless execution.",
    image: "/images/about-booth.jpg",
    imageBadge: "IDEAS / DESIGN / IMPACT",
    points: [
      {
        n: "01",
        title: "Designers, fabricators & project managers",
        text: "One in-house team from concept to completion — quality, transparency and on-time delivery at every stage."
      },
      {
        n: "02",
        title: "Customised exhibition & event solutions",
        text: "Tailored to your brand, space and objectives — built to attract attention and deliver meaningful results."
      },
      {
        n: "03",
        title: "Corporate events",
        text: "A day out for your team or a thank-you for your clients — creative ideas that make the day memorable."
      }
    ],
    stats: [
      {
        value: "22+",
        label: "Brands served"
      },
      {
        value: "10",
        label: "Services under one roof"
      },
      {
        value: "06",
        label: "Step delivery process"
      },
      {
        value: "[XX]+", // TODO: client to supply the real number
        label: "Stalls delivered — PLACEHOLDER, client to supply"
      }
    ]
  },
  services: {
    eyebrow: "What we do",
    title: "Our",
    titleAccent: "services",
    intro: "Creative and strategic solutions to help your brand grow, engage and stand out — on the show floor and online.",
    items: [
      {
        n: "01",
        title: "Exhibition Stall Designing",
        text: "Eye-catching stalls that create lasting impressions.",
        icon: "box"
      },
      {
        n: "02",
        title: "Stall Fabrication Service",
        text: "High-quality fabrication with precision and durability.",
        icon: "wrench"
      },
      {
        n: "03",
        title: "Social Media Management",
        text: "Build your brand, boost your presence.",
        icon: "message-circle"
      },
      {
        n: "04",
        title: "Packaging Design",
        text: "Creative packaging that sells.",
        icon: "package"
      },
      {
        n: "05",
        title: "Conference Management",
        text: "Seamless events, well organised.",
        icon: "users"
      },
      {
        n: "06",
        title: "Paid Ads — Meta & Google",
        text: "Targeted campaigns, real results.",
        icon: "megaphone"
      },
      {
        n: "07",
        title: "Mobile & Web Apps",
        text: "Smart solutions for a digital tomorrow.",
        icon: "smartphone"
      },
      {
        n: "08",
        title: "Web Development",
        text: "Fast, functional and future-ready.",
        icon: "globe"
      },
      {
        n: "09",
        title: "SEO & Search Marketing",
        text: "Higher rankings, more traffic.",
        icon: "search"
      },
      {
        n: "10",
        title: "CRM & Automation",
        text: "Smarter systems, happier customers.",
        icon: "workflow"
      }
    ]
  },
  process: {
    eyebrow: "Our process",
    title: "From concept to",
    titleAccent: "completion",
    intro: "A structured, collaborative process that turns your vision into a remarkable exhibition experience — every step handled with creativity, precision and professionalism.",
    image: "/images/process-booth.jpg",
    imageStrip: [
      "DESIGN",
      "PLAN",
      "BUILD",
      "DELIVER"
    ],
    steps: [
      {
        n: "01",
        title: "Discovery & Consultation",
        text: "We start by understanding your brand, goals, target audience and event requirements to build a strategy that fits."
      },
      {
        n: "02",
        title: "Concept & Design Development",
        text: "Your ideas become innovative booth concepts and detailed 3D designs — aesthetics and function in balance."
      },
      {
        n: "03",
        title: "Material Selection & Planning",
        text: "The right materials, finishes and technical solutions for a durable, visually stunning setup."
      },
      {
        n: "04",
        title: "Fabrication & Production",
        text: "Our skilled team brings the design to life with precision fabrication and high-quality craftsmanship."
      },
      {
        n: "05",
        title: "Complete In-House Production",
        text: "Logistics, on-site setup and final detailing handled in-house — installed as planned, with zero hassle."
      },
      {
        n: "06",
        title: "Handover & Support",
        text: "A smooth handover after the event, and support for whatever comes next."
      }
    ],
    whyTitle: "Why our process works",
    why: [
      {
        title: "Client-focused design",
        text: "Built around your brand and audience"
      },
      {
        title: "On-time delivery",
        text: "We respect your timeline"
      },
      {
        title: "Quality assurance",
        text: "Premium materials, skilled execution"
      },
      {
        title: "Clear communication",
        text: "Transparent to final handover"
      }
    ]
  },
  commitment: {
    eyebrow: "Our commitment",
    quoteBefore: "We transform brand goals into engaging exhibition experiences through ",
    quoteAccent: "creative design, careful planning",
    quoteAfter: " and seamless execution.",
    sub: "Thoughtful design · Reliable execution · Meaningful impact",
    cards: [
      {
        n: "01",
        title: "What we offer",
        lead: "Creative solutions, built around your brand.",
        variant: "glass",
        items: [
          "Custom exhibition stall design",
          "Stall fabrication & on-site execution",
          "Event and conference solutions",
          "Branding, graphics & spatial experiences",
          "Concept development to final installation"
        ]
      },
      {
        n: "02",
        title: "What we promise",
        lead: "A smooth, dependable experience at every step.",
        variant: "gold",
        items: [
          "Clear communication and coordination",
          "Quality-focused design & fabrication",
          "Transparent, practical planning",
          "Attention to timelines and details",
          "Support from concept to completion"
        ]
      },
      {
        n: "03",
        title: "Why choose us",
        lead: "A collaborative team focused on your success.",
        variant: "glass",
        items: [
          "Creative ideas with a purpose",
          "Design and execution under one roof",
          "Solutions tailored to your objectives",
          "A detail-oriented, hands-on approach",
          "Experiences made to help brands stand out"
        ]
      }
    ]
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Stalls we've",
    titleAccent: "built",
    filters: [
      "All work",
      "Exhibitions",
      "Conferences",
      "Branding"
    ],
    items: [
      {
        title: "MCS × SMN Industries",
        meta: "Exhibition stall · Design & build",
        image: "/images/work-mcs-smn.jpg",
        alt: "White curved stall for MCS Metal Craft Studio and SMN Industries",
        tall: true,
        category: "Exhibitions"
      },
      {
        title: "Next Education",
        meta: "Exhibition stall · Fabrication",
        image: "/images/work-next-education.jpg",
        alt: "Orange and white Next Education stall with display shelves",
        tall: false,
        category: "Exhibitions"
      },
      {
        title: "Seabright",
        meta: "Exhibition stall · Design & build",
        image: "/images/work-seabright.jpg",
        alt: "Navy and gold Seabright stall with LED edge lighting",
        tall: false,
        category: "Exhibitions"
      },
      {
        title: "Vasu Healthcare",
        meta: "Exhibition stall · Fabrication",
        image: "/images/work-vasu-healthcare.jpg",
        alt: "Green Vasu Healthcare stall with arched header",
        tall: true,
        category: "Exhibitions"
      },
      {
        title: "Cruxzen · Unify",
        meta: "Exhibition stall · Graphics",
        image: "/images/work-cruxzen.jpg",
        alt: "Blue Cruxzen stall with illustrated wall graphics",
        tall: false,
        category: "Branding"
      },
      {
        title: "Sentiss",
        meta: "Exhibition stall · Design & build",
        image: "/images/work-sentiss.jpg",
        alt: "Sentiss pharmaceutical stall with backlit product panels",
        tall: false,
        category: "Exhibitions"
      }
    ]
  },
  clients: {
    eyebrow: "Brands who trust us",
    title: "Our",
    titleAccent: "clients",
    intro: "From education and healthcare to manufacturing and tech.",
    names: [
      "Next Education",
      "Tata Advanced Systems",
      "Fujifilm",
      "Nyrvana",
      "FPT",
      "Metal Craft Studio",
      "DCM Agrotech",
      "GL Bajaj",
      "Panghat",
      "Vibrant Flooring",
      "Amity University",
      "Zedpack",
      "Pexpo",
      "Sparsh",
      "Anest Iwata Motherson",
      "DGM Wire",
      "Securus",
      "RR Plast",
      "Goma",
      "Zither",
      "SSICAB",
      "Worldpack Automation"
    ]
  },
  contact: {
    eyebrow: "Contact the team",
    title: "Got an expo coming up? Let's make it",
    titleAccent: "memorable",
    intro: "Share your event, stall size and goals — we'll come back with a concept and a clear plan.",
    formTitle: "Submit a brief",
    formSub: "We usually reply within one working day.",
    fields: [
      {
        id: "name",
        label: "Full name",
        type: "text",
        placeholder: "Your name",
        required: true
      },
      {
        id: "company",
        label: "Company",
        type: "text",
        placeholder: "Brand / company"
      },
      {
        id: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+91",
        required: true
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "you@company.com",
        required: true
      },
      {
        id: "event",
        label: "Event / exhibition",
        type: "text",
        placeholder: "e.g. IHGF, CPHI, Auto Expo"
      },
      {
        id: "size",
        label: "Stall size",
        type: "text",
        placeholder: "e.g. 6 × 9 m"
      }
    ],
    messageLabel: "Project details",
    messagePlaceholder: "Stall size, location, dates, the experience you want visitors to have…",
    submit: "Send brief",
    whatsappLabel: "or chat on WhatsApp →"
  },
  footer: {
    blurb: "Creative solutions for modern brands — exhibition stalls, fabrication, events and graphics from Dwarka, New Delhi.",
    servicesLinks: [
      "Exhibition stall design",
      "Stall fabrication",
      "Conference management",
      "Packaging design",
      "Web & mobile apps",
      "Digital marketing"
    ],
    giantWord: "ELEVEN 11",
    copyright: "© 2026 Eleven Design Studio. All rights reserved.",
    motto: "IDEAS / DESIGN / IMPACT"
  }
};

export default content;
