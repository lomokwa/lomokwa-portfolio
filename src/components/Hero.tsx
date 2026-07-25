import TypingDescription from './TypingDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import ModelViewer from './3dModel';
import FeaturedProjects from './FeaturedProjects';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen md:min-h-dvh bg-gray-950 pt-24">
      <div className="hero-content flex-col">
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
          {/* <img src="/assets/pictures/pixel-art.webp" width={700} height={700} alt="Pixel art of Lorenzo Mokwa" /> */}
          <ModelViewer />
          <div>
            <h1 className="text-5xl font-bold">Hey, I&apos;m Lorenzo!</h1>
            <TypingDescription />
            <div className='flex flex-col sm:flex-row content-center sm:justify-center gap-2 md:block mx-auto w-48 sm:w-full'>
              <a href='/docs/mokwa-lorenzo-resume.pdf' rel='noopener noreferrer' target='_blank' className="btn text-white md:mr-5 w-full mx-auto sm:w-[150px]"><FontAwesomeIcon size='2x' icon={faNewspaper} />Resumé</a>
              <a href='https://www.linkedin.com/in/lomokwa/' rel='noopener noreferrer' target='_blank' className="btn text-white md:mr-5 w-full mx-auto sm:w-[150px]"><FontAwesomeIcon size='2x' icon={faLinkedin}/>LinkedIn</a>
              <a href='https://www.github.com/lomokwa' rel='noopener noreferrer' target='_blank' className='btn text-white w-full mx-auto sm:w-[150px]'><FontAwesomeIcon size='2x' icon={faGithub}/>Github</a>
            </div>
          </div>
        </div>
        <FeaturedProjects />
      </div>
    </div>
  );
};

export default Hero;