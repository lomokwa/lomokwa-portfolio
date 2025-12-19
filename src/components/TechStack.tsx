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

const TechStack: React.FC = () => {
  return (
    <div id="tech">
      <div className="flex-col justify-center content-center mx-auto text-center p-[16px]">
        <h2 className="text-4xl font-bold text-center">Tech</h2>
        <p>
          I focus on TypeScript and JavaScript development. I'm currently learning Go and have experience
          with the following:
        </p>
      </div>
      <div className="flex justify-around flex-wrap max-w-2xl mx-auto">
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>JavaScript</p>
          <FontAwesomeIcon icon={faJs} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>Java</p>
          <FontAwesomeIcon icon={faJava} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>HTML5</p>
          <FontAwesomeIcon icon={faHtml5} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>CSS3</p>
          <FontAwesomeIcon icon={faCss3} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>React</p>
          <FontAwesomeIcon icon={faReact} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>Node.js</p>
          <FontAwesomeIcon icon={faNodeJs} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>Docker</p>
          <FontAwesomeIcon icon={faDocker} size="5x" />
        </div>
        <div className="flex flex-col content-center text-center mx-5 mt-5 w-[100px]">
          <p>Git</p>
          <FontAwesomeIcon icon={faGit} size="5x" />
        </div>
      </div>
      <div className="flex-col justify-center content-center mx-auto text-center p-[16px] mt-5">
        <p className="text-xl">
          And more!
        </p>
      </div>
      
    </div>
  );
};

export default TechStack;
