import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faDocker,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiGo,
  SiVite,
  SiTailwindcss,
  SiSqlite,
  SiExpress,
  SiGithubactions,
  SiNestjs,
  SiMongodb,
  SiPostgresql
} from "react-icons/si";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

const faIcon = (icon: Parameters<typeof FontAwesomeIcon>[0]["icon"]) => (
  <FontAwesomeIcon icon={icon} size="lg" />
);

const siIcon = (Icon: IconType) => <Icon size={22} />;

const techs: Tech[] = [
  { name: "TypeScript", icon: siIcon(SiTypescript) },
  { name: "JavaScript", icon: faIcon(faJs) },
  { name: "Go", icon: siIcon(SiGo) },
  { name: "Java", icon: faIcon(faJava) },
  { name: "HTML5", icon: faIcon(faHtml5) },
  { name: "CSS3", icon: faIcon(faCss3) },
  { name: "TailwindCSS", icon: siIcon(SiTailwindcss) },
  { name: "React", icon: faIcon(faReact) },
  { name: "Vite", icon: siIcon(SiVite) },
  { name: "Node.js", icon: faIcon(faNodeJs) },
  { name: "Express", icon: siIcon(SiExpress) },
  { name: "NestJS", icon: siIcon(SiNestjs) },
  { name: "SQLite", icon: siIcon(SiSqlite) },
  { name: "PostgreSQL", icon: siIcon(SiPostgresql) },
  { name: "MongoDB", icon: siIcon(SiMongodb) },
  { name: "Docker", icon: faIcon(faDocker) },
  { name: "Git", icon: faIcon(faGit) },
  { name: "GitHub Actions", icon: siIcon(SiGithubactions) },
];

const TechStack: React.FC = () => {
  return (
    <div id="tech" className="mt-20 max-w-3xl mx-auto p-[16px]">
      <div className="flex-col justify-center content-center mx-auto text-center">
        <h2 className="text-4xl font-bold text-center">Tech</h2>
        <p className="mt-2 opacity-90">
          I focus on TypeScript and JavaScript development. I'm currently learning Go and have experience
          with the following:
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-2 rounded-full bg-[#0e1522] border border-white/10 px-4 py-2 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[#164e63] hover:to-[#4f46e5] hover:-translate-y-0.5"
          >
            <span className="transition-transform duration-300 group-hover:scale-110">{tech.icon}</span>
            <span className="font-medium text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="flex-col justify-center content-center mx-auto text-center mt-8">
        <p className="text-xl opacity-90">
          And more!
        </p>
      </div>
    </div>
  );
};

export default TechStack;
