export type Experience = {
  period: string;
  role: string;
  company: string;
  current?: boolean;
};

export const EXPERIENCES: Experience[] = [
  {
    period: "09.2025 – Present",
    role: "UX/UI Designer",
    company: "Burncode Company",
    current: true,
  },
  {
    period: "07.2025 – Present",
    role: "UX/UI Designer",
    company: "Innoland Incubation Center",
    current: true,
  },
  { period: "03.2025 – 07.2025", role: "UX/UI Design Mentor", company: "IT Brains Academy" },
  { period: "09.2024 – 07.2025", role: "UX/UI Designer", company: "ITB Techno" },
  { period: "08.2024 – 06.2025", role: "UX/UI Designer", company: "Pelcare (startup/freelance)" },
];

export type Education = {
  period: string;
  school: string;
  field: string;
};

export const EDUCATION: Education[] = [
  { period: "2024 – 2025", school: "IT Brains Academy", field: "UX & UI Design" },
  { period: "2020 – 2025", school: "Baku Slavic Uni.", field: "Rus Dili Müellimliyi" },
];
