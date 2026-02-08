import { Code2, Cpu, Palette, Shield, type LucideIcon } from "lucide-react";

type Skill = { name: string; level: string; Icon?: LucideIcon };

export const profile = {
  name: "Balwinder Singh",
  title: "Senior Software Engineer / Full-Stack Engineer",
  intro:
    "Senior full-stack engineer with 7+ years of experience building scalable SaaS platforms, APIs, and data-driven dashboards.",
  location: "Toronto, Canada",
  experience: "7+ years",
  citizenship: "Canadian",
  // Add your email and links when you're ready (kept blank to avoid placeholders).
  email: "balwindersingh4264@gmail.com",
  socials: {
    github: "",
    linkedin: "",
  },
};

export const about = {
  headline: "Scalable systems. Product-focused delivery.",
  body: [
    "I am a Senior Software Engineer with around seven years of experience, primarily working with Node.js, React, and JavaScript.",
    "I specialize in building scalable full-stack applications, designing APIs, working with data-driven systems, and creating dashboards for product, sales, and operations teams.",
    "I have led development end-to-end — from architecture and backend services to frontend experiences and deployment.",
  ],
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: "Advanced", Icon: Code2 },
  { name: "Next.js", level: "Advanced", Icon: Cpu },
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "MUI", level: "Strong", Icon: Palette },
  { name: "Tailwind CSS", level: "Strong" },
  { name: "React Hook Form", level: "Strong" },
  { name: "Zod", level: "Strong" },

  // Backend
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Strong" },
  { name: "MongoDB", level: "Advanced" },
  { name: "Mongoose", level: "Strong" },
  { name: "Redis", level: "Strong" },
  { name: "REST APIs", level: "Advanced" },

  // Data & analytics
  { name: "GA4", level: "Strong" },
  { name: "BigQuery", level: "Strong" },
  { name: "ETL Pipelines", level: "Strong" },
  { name: "Event-based Analytics", level: "Strong" },

  // Cloud & DevOps
  { name: "AWS (EC2, Route53, Elastic Beanstalk)", level: "Strong" },
  { name: "Docker", level: "Strong" },
  { name: "Nginx", level: "Strong" },
  { name: "PM2", level: "Strong" },

  // Integrations
  { name: "Stripe (Subscriptions & Billing)", level: "Strong" },
  { name: "Twilio (SMS & Voice)", level: "Strong" },
  { name: "3rd-Party Integrations", level: "Advanced", Icon: Shield },
];

export const experience = [
  {
    role: "Lead / Senior Software Engineer",
    company: "Metaguest.ai",
    period: "2020–Present",
    bullets: [
      "Architected and built a large multi-portal SaaS platform from scratch.",
      "Developed hotel onboarding, listing portals, admin dashboards, and analytics systems.",
      "Designed scalable Node.js APIs and MongoDB data models.",
      "Built GA4 → BigQuery → MongoDB analytics pipelines.",
      "Integrated Stripe billing, subscriptions, and payment flows.",
      "Managed AWS infrastructure and production deployments.",
      "Acted as primary/lead engineer owning architecture and execution.",
    ],
  },
  {
    role: "Software Developer",
    company: "Venngo Inc.",
    period: "2019–2020",
    location: "Toronto",
    bullets: [
      "Developed production React Native mobile applications and React.js web features supporting a large consumer platform.",
      "Built and enhanced authentication flows, push notifications, UI performance, and user experience.",
      "Integrated and supported Node.js backend APIs, ensuring stable, reliable platform communication.",
      "Collaborated with product, design, and QA teams to deliver high-quality releases.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Opulence Global",
    period: "2017–2019",
    location: "Richmond Hill",
    bullets: [
      "Developed and enhanced enterprise e-commerce and business platforms used internationally.",
      "Implemented multi-language support, subscription billing systems, and multiple payment gateways.",
      "Built backend features supporting product listings, checkout workflows, and account systems.",
      "Implemented VAT & duties compliance logic for EU transactions.",
      "Contributed to platform stability, enhancements, and continuous improvement initiatives.",
    ],
  },
];

export const projects = [
  {
    title: "Metaguest Platform",
    description:
      "Multi-portal SaaS platform powering 15,000+ businesses and 2,000+ hotels.",
    tags: ["Node.js", "React", "MongoDB", "AWS", "Stripe"],
    href: "https://metaguest.ai",
  },
  {
    title: "Venngo Mobile Platform",
    description:
      "Consumer perks mobile & web platform delivering a polished experience across React Native and React.js.",
    tags: ["React Native", "React", "Node.js", "Notifications"],
    href: "#",
  },
  {
    title: "Opulence Global Commerce Platform",
    description:
      "International e-commerce platform with subscription billing, VAT/duties compliance, and multi-language support.",
    tags: ["E-commerce", "Payments", "Subscriptions", "VAT"],
    href: "#",
  },
];

export const focus = [
  "Building scalable backend systems",
  "Full-stack product development",
  "SaaS platforms",
  "Automation and AI-assisted systems",
];

export const contact = {
  headline: "Open to Senior Backend / Full-Stack roles",
  preference: "Remote or Hybrid",
};
