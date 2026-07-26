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

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-5xl mx-auto p-[16px]">
        {
          codingProjects.map((project) => (
            <div key={project.slug} className="mb-6 break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.thumbnailPath}
                alt={`Screenshot of ${project.name}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="mt-1 text-sm opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {
                    project.technologies.map((tech, index) => (
                      <div key={index} className="badge badge-outline badge-sm text-white/80 border-white/30">{tech}</div>
                    ))
                  }
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {
                    project?.liveUrl &&
                      <a href={project.liveUrl} rel='noreferrer noopener' target='_blank' className="btn btn-sm bg-[#6441a5] text-white hover:bg-[#47316e] border-none">Live</a>
                  }
                  {
                    project?.repos?.map((repo, repoIndex) => (
                      <a key={repoIndex} href={repo.url} rel='noreferrer noopener' target='_blank' className="btn btn-sm btn-outline text-white hover:bg-white/10 hover:border-white">{repo.label}</a>
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
