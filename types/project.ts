export type ProjectOutcome = {
  label: string;
  value: string;
};

export type ProjectHighlight = {
  title: string;
  body: string;
};

export type ProjectPhase = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  n: string;
  kind: string;
  year: string;
  blurb: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  role: string;
  timeline: string;
  team: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: ProjectOutcome[];
  responsibilities: string[];
  techStack: string[];
  highlights: ProjectHighlight[];
  phases: ProjectPhase[];
  liveUrl?: string;
  repoUrl?: string;
};
