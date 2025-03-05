interface CodingProject {
  name: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  thumbnailPath: string;
}

const codingProjects: CodingProject[] = [
  {
    name: "Maid in Florida",
    description: "A client website for a cleaning service company.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "NodeJS", "ExpressJS", "Github Actions", "GCP"],
    liveUrl: "https://maidinfloridaservices.com/",
    thumbnailPath: "/assets/pictures/project-thumbnails/maidinflorida.jpg",
  },
  {
    name: "This Portfolio!",
    description: "The website you are currently on.",
    technologies: ["NextJS", "TypeScript", "TailwindCSS", "SCSS"],
    repoUrl: "https://github.com/lomokwa/lomokwa-portfolio",
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
  {
    name: "Spotify Album Display (WIP)",
    description: "An embeddable album cover art display for Spotify.",
    technologies: ["Zig"],
    repoUrl: "https://github.com/lomokwa/spotipi-zig",
    thumbnailPath: "/assets/pictures/project-thumbnails/spotipi.png"
  },
  {
    name: "Selton Mello Bot (WIP)",
    description: "An utility bot for my personal Discord server.",
    technologies: ["NodeJS", "JavaScript", "DiscordJS"],
    repoUrl: "https://github.com/lomokwa/selton-mello-bot",
    thumbnailPath: "/assets/pictures/project-thumbnails/seltonmello.png"
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
];

export default codingProjects;