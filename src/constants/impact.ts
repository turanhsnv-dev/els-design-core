export type Metric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
};

export const METRICS: Metric[] = [
  {
    value: 45,
    suffix: "+",
    label: "Projects Delivered",
    description: "End-to-end digital products shipped across fintech, SaaS, and e-commerce.",
  },
  {
    value: 45,
    prefix: "+",
    suffix: "%",
    label: "Avg. Engagement Lift",
    description:
      "Measurable improvement in user engagement and conversion across client products.",
  },
  {
    value: 4,
    label: "Industry Awards",
    description:
      "Recognition for design excellence in UI/UX from regional and international bodies.",
  },
  {
    value: 5,
    label: "Companies Served",
    description:
      "From early-stage startups to established tech companies across multiple industries.",
  },
];

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "Empathy First",
    body: "Design begins with deep human understanding. Before a single frame is drawn, I study the people who will use it — their frustrations, habits, and mental models.",
  },
  {
    number: "02",
    title: "Systems Thinking",
    body: "Great design scales. I build component ecosystems and design languages that grow with the product, keeping teams aligned and development fast.",
  },
  {
    number: "03",
    title: "Motion as Language",
    body: "Animation is not decoration — it is communication. Every transition carries intent: guiding attention, signaling state, and making interfaces feel alive.",
  },
];
