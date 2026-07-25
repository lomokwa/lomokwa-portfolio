import React from 'react';
import { Link } from 'react-router-dom';
import codingProjects from '@/utils/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = codingProjects.filter((project) => project.featured);

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 max-w-4xl lg:max-w-6xl mx-auto p-[16px]">
      <div className={`grid grid-cols-1 ${featuredProjects.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
        {featuredProjects.map((project) => (
          <div key={project.slug} className="rounded-xl bg-gradient-to-r from-[#164e63] to-[#4f46e5] p-[2px]">
            <div className="h-full rounded-[calc(0.75rem-2px)] bg-[#0e1522] flex flex-col gap-4 p-6">
              <img
                src={project.thumbnailPath}
                alt={`Screenshot of ${project.name}`}
                className="w-full h-[180px] object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center flex-1">
                <span className="badge badge-accent text-white mb-2 w-fit [text-shadow:none]">Featured Project</span>
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p className="mt-2 opacity-90">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <Link to={`/projects/${project.slug}`} className="btn bg-[#6441a5] text-white hover:bg-[#47316e]">
                    Learn More
                  </Link>
                  {
                    project.liveUrl &&
                      <a href={project.liveUrl} rel='noreferrer noopener' target='_blank' className="btn btn-outline">Live</a>
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
