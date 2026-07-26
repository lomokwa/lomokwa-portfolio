import React from 'react';
import codingProjects from '@/utils/projects';

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="mt-20 flex-col justify-center content-center mx-auto text-center p-[16px]">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p>
          Some of the projects I have worked / been working on recently!
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto p-[16px]">
        {
          codingProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col rounded-2xl bg-[#111827] border border-white/5 overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-white/10"
            >
              <div className="h-28 sm:h-32 overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.thumbnailPath}
                  alt={`Screenshot of ${project.name}`}
                />
              </div>
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h2 className="font-semibold text-sm sm:text-base leading-tight">{project.name}</h2>
                <p className="text-xs opacity-75 flex-1 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {
                    project.technologies.slice(0, 3).map((tech, index) => (
                      <div key={index} className="badge badge-outline badge-xs text-white/70 border-white/20 py-2">{tech}</div>
                    ))
                  }
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {
                    project?.liveUrl &&
                      <a href={project.liveUrl} rel='noreferrer noopener' target='_blank' className="btn btn-xs bg-[#6441a5] text-white hover:bg-[#47316e] border-none">Live</a>
                  }
                  {
                    project?.repos?.map((repo, repoIndex) => (
                      <a key={repoIndex} href={repo.url} rel='noreferrer noopener' target='_blank' className="btn btn-xs btn-outline text-white hover:bg-white/10 hover:border-white">{repo.label}</a>
                    ))
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

export default Projects;
