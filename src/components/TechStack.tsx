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

const techs = [
  { name: "JavaScript", icon: faJs },
  { name: "Java", icon: faJava },
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3 },
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Docker", icon: faDocker },
  { name: "Git", icon: faGit },
];

const TechStack: React.FC = () => {
  return (
    <div id="tech" className="mt-20 max-w-4xl mx-auto p-[16px]">
      <div className="flex-col justify-center content-center mx-auto text-center">
        <h2 className="text-4xl font-bold text-center">Tech</h2>
        <p className="mt-2 opacity-90">
          I focus on TypeScript and JavaScript development. I'm currently learning Go and have experience
          with the following:
        </p>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="group rounded-xl bg-gradient-to-br from-[#164e63] to-[#4f46e5] p-[2px] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center justify-center gap-3 h-full rounded-[calc(0.75rem-2px)] bg-[#0e1522] px-4 py-6 transition-colors duration-300 group-hover:bg-[#111827]">
              <FontAwesomeIcon icon={tech.icon} size="3x" className="transition-transform duration-300 group-hover:scale-110" />
              <p className="font-semibold">{tech.name}</p>
            </div>
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
