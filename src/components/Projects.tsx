import React from 'react';
import { Link } from 'react-router-dom';
import codingProjects from '@/utils/projects';

const Projects
: React.FC = () => {
  return (
    <div id="projects">
      <div className="mt-20 flex-col justify-center content-center mx-auto text-center p-[16px]">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p>
          Some of the projects I have worked / been working on recently!
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl lg:max-w-5xl mx-auto ">
        {
          codingProjects.map((project, index) => (
            <div
              key={index}
              className="mx-auto w-[320px] rounded-xl bg-gradient-to-br from-[#164e63] to-[#4f46e5] p-[2px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="card bg-[#0e1522] shadow-xl rounded-[calc(0.75rem-2px)] h-full overflow-hidden">
                <figure className='h-40 object-cover overflow-hidden'><img className='object-cover h-[100%] w-[100%] transition-transform duration-300 hover:scale-105' src={project.thumbnailPath} alt={`Screenshot of ${project.name}`}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{project.name}</h2>
                  <p className="opacity-90">{project.description}</p>
                  <div  className="flex flex-wrap max-h-16 overflow-y-auto gap-2 mt-5 ">
                  {
                    project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline">{tech}</div> 
                    ))
                  }
                  </div>
                  <div className="card-actions justify-end mt-5">
                    {
                      project?.liveUrl && 
                        <a href={project.liveUrl} rel='noreferrer noopener' target='_blank' className="btn bg-[#6441a5] text-white hover:bg-[#47316e]">Live</a>
                    }
                    {
                      project?.repos?.map((repo, repoIndex) => (
                        <a key={repoIndex} href={repo.url} rel='noreferrer noopener' target='_blank' className="btn bg-[#6441a5] text-white hover:bg-[#47316e]">{repo.label}</a>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects
;
