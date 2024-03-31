interface CodingProject {
  name: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  thumbnailPath: string;
}

// Define an array of coding projects
const codingProjects: CodingProject[] = [
  {
    name: "Maid in Florida",
    description: "A website for a cleaning service company.",
    technologies: ["NextJS", "JavaScript", "TailwindCSS"],
    liveUrl: "https://maidinfloridaservices.com/",
    thumbnailPath: "/assets/pictures/project-thumbnails/example.webp",
  },
  {
    name: "Collector's Car Hub",
    description: "An user-curated marketplace aggregator.",
    technologies: ["NextJS", "JavaScript", "TailwindCSS", "MongoDB", "ExpressJS", "NodeJS", "Firebase"],
    repoUrl: "https://github.com/lomokwa/car-marketplace-web",
    liveUrl: "https://collectorscarhub.com/",
    thumbnailPath: "/assets/pictures/project-thumbnails/collectorscarhub.jpg",
  },
  {
    name: "Checkov Todo",
    description: "A fullstack todo application.",
    technologies: ["React", "JavaScript", "Firebase", "ReactNative"],
    repoUrl: "https://github.com/lomokwa/checkov-web",
    thumbnailPath: "/assets/pictures/project-thumbnails/checkov.png"
  },
  {
    name: "This Portfolio!",
    description: "The website you are currently on",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "SCSS"],
    repoUrl: "",
    liveUrl: "https://lomokwa.com",
    thumbnailPath: "/assets/pictures/project-thumbnails/portfolio.png"
  },
  {
    name: "Chess CLI Game",
    description: "A chess game in the terminal.",
    technologies: ["Java"],
    repoUrl: "https://github.com/lomokwa/chess-system",
    thumbnailPath: "/assets/pictures/project-thumbnails/chess.png"
  },
];

export default codingProjects;