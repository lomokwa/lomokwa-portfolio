import React from 'react';
import codingProjects, { CodingProject } from '@/utils/projects';

// Visual weight per project size, used to build a bento-style grid instead
// of a uniform one. "lg" cards span two columns and surface highlights;
// "md"/"sm" stay single-column but vary in image height and copy density.
const sizeClasses: Record<NonNullable<CodingProject["size"]>, string> = {
  lg: "sm:col-span-2 lg:col-span-2",
  md: "sm:col-span-2 lg:col-span-1",
  sm: "col-span-1",
};

const imageHeightClasses: Record<NonNullable<CodingProject["size"]>, string> = {
  lg: "h-56",
  md: "h-44",
  sm: "h-32",
};

const ProjectCard: React.FC<{ project: CodingProject }> = ({ project }) => {
  const size = project.size ?? "sm";
  const isLarge = size === "lg";

  return (
    <div className={`${sizeClasses[size]} h-full`}>
      <div className="rounded-xl bg-gradient-to-br from-[#164e63] to-[#4f46e5] p-[2px] h-full transition-transform duration-300 hover:-translate-y-1">
        <div className="card bg-[#0e1522] shadow-xl rounded-[calc(0.75rem-2px)] h-full overflow-hidden flex flex-col">
          <figure className={`${imageHeightClasses[size]} object-cover overflow-hidden shrink-0`}>
            <img className='object-cover h-[100%] w-[100%] transition-transform duration-300 hover:scale-105' src={project.thumbnailPath} alt={`Screenshot of ${project.name}`}/>
          </figure>
          <div className="card-body flex flex-col flex-1">
            <h2 className={`card-title ${isLarge ? "text-2xl" : ""}`}>{project.name}</h2>
            <p className={`opacity-90 flex-1 ${isLarge ? "" : "text-sm"}`}>{project.description}</p>
            {
              isLarge && project.highlights && project.highlights.length > 0 &&
                <ul className="mt-2 space-y-1 text-sm opacity-90 list-disc list-inside">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
            }
            <div className="flex flex-wrap max-h-16 overflow-y-auto gap-2 mt-5 ">
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
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="mt-20 flex-col justify-center content-center mx-auto text-center p-[16px]">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <p>
          Some of the projects I have worked / been working on recently!
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl lg:max-w-5xl mx-auto grid-flow-dense">
        {
          codingProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
