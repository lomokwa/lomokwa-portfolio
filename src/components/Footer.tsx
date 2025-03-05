import React from 'react';
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 footer p-10 bg-[#0e1522] text-white">
      <aside>
        <img src='/assets/meta/android-chrome-192x192.png' width={100} className='bor border-[#eeeeee] border-2'/>
        <p>Mokwa & Co.<br/>EST. 2022</p>
      </aside> 
      <nav className='flex gap-10 flex-wrap'>
        <div>
          <h6 className="footer-title text-white">Links</h6>
          <div className='flex flex-col'>
            <a href="#tech" rel='noopener noreferrer'>Tech</a>
            <a href="#projects" rel='noopener noreferrer'>Projects</a>
            <a href='/docs/mokwa-lorenzo-resume.pdf' rel='noopener noreferrer' target='_blank'>Resumé</a>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Contact</h6>
          <div className='flex flex-col'>
            <a href='mailto:lomokwa.dev@gmail.com'>lomokwa.dev@gmail.com</a>
            <a href='https://www.linkedin.com/in/lomokwa/'>linkedin.com/in/lomokwa/</a>
          </div>
        </div>
        <div>
          <h6 className="footer-title">Socials</h6> 
          <div className="grid grid-flow-col gap-4">
            <a href='https://linkedin.com/in/lomokwa' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
            <a href='https://www.youtube.com/@lomokwa' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faYoutube} size='2x' /></a>
            <a href='https://github.com/lomokwa' rel='noopener noreferrer' target='_blank'><FontAwesomeIcon icon={faGithub} size='2x' /></a>
          </div>
        </div>
        
      </nav>
    </footer>
  );
};

export default Footer;