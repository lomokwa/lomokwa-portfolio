import React from 'react';
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
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl lg:max-w-5xl mx-auto ">
        {
          codingProjects.map((project, index) => (
            <div key={index} className="mx-auto card bg-[#0e1522] shadow-xl w-[320px]">
              <figure className='h-40'><img className='object-cover' src={project.thumbnailPath} alt={`Screenshot of ${project.name}`}/></figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
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
                    project?.repoUrl && 
                      <a href={project.repoUrl} rel='noreferrer noopener' target='_blank' className="btn bg-[#6441a5] text-white hover:bg-[#47316e]">Repo</a>
                  }
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
