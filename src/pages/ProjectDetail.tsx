import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import ReactMarkdown, { type Components } from "react-markdown";
import codingProjects from "@/utils/projects";

// Custom renderers so markdown output matches the site's look and internal
// links (e.g. "/projects/other-slug") use React Router instead of a full
// page reload.
const markdownComponents: Components = {
  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
  p: ({ children }) => <p className="mt-3 text-lg opacity-90">{children}</p>,
  code: ({ children }) => (
    <code className="px-1 py-0.5 rounded bg-white/10 text-[0.9em]">{children}</code>
  ),
  a: ({ href, children }) => {
    if (!href) return <>{children}</>;
    return href.startsWith("/") ? (
      <Link to={href} className="link link-info [text-shadow:none]">
        {children}
      </Link>
    ) : (
      <a href={href} rel="noreferrer noopener" target="_blank" className="link link-info [text-shadow:none]">
        {children}
      </a>
    );
  },
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = codingProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mt-20 max-w-4xl mx-auto p-[16px] pb-20 text-white">
      <Link to="/#projects" className="link link-hover text-sm opacity-70">
        &larr; Back to projects
      </Link>

      <div className="mt-5 rounded-xl overflow-hidden">
        <img
          src={project.thumbnailPath}
          alt={`Screenshot of ${project.name}`}
          className="w-full max-h-[400px] object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mt-8">{project.name}</h1>
      {project.longDescription ? (
        <div className="mt-4">
          <ReactMarkdown components={markdownComponents}>{project.longDescription}</ReactMarkdown>
        </div>
      ) : (
        <p className="mt-4 text-lg opacity-90">{project.description}</p>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
          <ul className="list-disc list-inside space-y-2 opacity-90">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-8">
        {project.technologies.map((tech, index) => (
          <div key={index} className="badge badge-outline">
            {tech}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            rel="noreferrer noopener"
            target="_blank"
            className="btn bg-[#6441a5] text-white hover:bg-[#47316e]"
          >
            Live
          </a>
        )}
        {project.repos?.map((repo, index) => (
          <a
            key={index}
            href={repo.url}
            rel="noreferrer noopener"
            target="_blank"
            className="btn bg-[#6441a5] text-white hover:bg-[#47316e]"
          >
            {repo.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
