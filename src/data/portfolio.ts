export type Project = {
  slug: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  sourceUrl?: string;
  videoUrl?: string;
};

export type Experience = {
  id: string;
  organization?: string;
  initials: string;
  title: string;
  context: string;
  start: string;
  end?: string;
  description: string;
  current: boolean;
};

// This is the single place to edit the portfolio's written content and links.
export const profile = {
  name: "Aditya Manjrekar",
  firstName: "Aditya",
  tagline: "software developer / ai creator",
  description:
    "Aditya Manjrekar's portfolio. Software development, agentic automation, and AI filmmaking. Explore selected projects and work.",
  github: "https://github.com/adi29m",
  githubHandle: "adi29m",
  // Add your preferred public contact details when ready.
  email: "",
  linkedin: "",
  biography: [
    "I'm Aditya Manjrekar, a software developer working across web applications, AI, and automation. I'm currently an FDE at Airosoft Labs, an AI startup.",
    "My work brings together software engineering and creative production. I've developed agentic automations using low-code platforms, and I create AI-generated films for technology companies.",
    "Here you'll find a selection of what I've built: a workout tracker, a music app, an evidence-preparation workspace, and a digital studio website.",
  ],
  status: ["fde at airosoft labs", "creating ai films for tech companies"],
  focus: ["web applications", "agentic automation", "ai filmmaking"],
};

export const experiences: Experience[] = [
  {
    id: "airosoft",
    organization: "Airosoft Labs",
    initials: "al",
    title: "FDE",
    context: "AI startup",
    start: "2026-08",
    current: true,
    description: "Working as an FDE at Airosoft Labs, an AI startup.",
  },
  {
    id: "films",
    initials: "ai",
    title: "AI Film Production",
    context: "Creative production",
    start: "2026-05",
    current: true,
    description: "Creating AI-generated films for technology companies.",
  },
  {
    id: "automation",
    initials: "→",
    title: "Agentic Automation Development",
    context: "Low-code platforms",
    start: "2025-09",
    end: "2026-02",
    current: false,
    description: "Developed agentic automations using low-code platforms.",
  },
];

export const projects: Project[] = [
  {
    slug: "rep-tracker",
    name: "Rep Tracker",
    category: "fitness / web app",
    technologies: ["Next.js", "React", "Tailwind", "Supabase"],
    description:
      "A personal training journal to log workouts, track progress, and train with buddy groups. Private workout history with shared, aggregate leaderboards.",
    image: "/images/rep-tracker.jpg",
    imageAlt: "Rep Tracker's account page with the headline Built one rep at a time",
    liveUrl: "https://rep-tracker-phi.vercel.app",
    sourceUrl: "https://github.com/adi29m/rep-tracker",
  },
  {
    slug: "musify",
    name: "Musify",
    category: "music / web app",
    technologies: ["Next.js", "Prisma", "Tailwind", "PostgreSQL"],
    description:
      "A Spotify-inspired music app for discovering tracks, saving favorites, and making playlists. Built with Audius discovery and a full playback queue.",
    image: "/images/musify.jpg",
    imageAlt: "Musify music app interface",
    liveUrl: "https://musify-adi29ms-projects.vercel.app",
    sourceUrl: "https://github.com/adi29m/musify",
  },
  {
    slug: "carbon-ledger",
    name: "Carbon Ledger",
    category: "climate tech / web app",
    technologies: ["React", "TypeScript", "Next.js", "Supabase"],
    description:
      "An evidence-preparation workspace for aluminium exporters. Organize suppliers, review source documents, and prepare draft evidence packs with a team.",
    image: "/images/carbon-ledger.png",
    imageAlt: "Carbon Ledger dashboard showing evidence progress and supplier information using demo data",
    liveUrl: "https://carbon-ledger-self.vercel.app",
    sourceUrl: "https://github.com/adi29m/carbon-ledger",
  },
  {
    slug: "striff-studio",
    name: "Striff Studio",
    category: "digital studio / website",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive website for an AI and digital studio. Interactive service tabs, an accessible FAQ, and thoughtful motion bring the studio's work into focus.",
    image: "/images/striff-studio.jpg",
    imageAlt: "Striff Studio website with its Ideas that move business headline",
    liveUrl: "https://striff-studio.vercel.app",
    // Add sourceUrl once the repository is publicly accessible.
  },
];

export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
