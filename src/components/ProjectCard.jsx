export default function ProjectCard({ project }) {
  return(
      <div className="tw-card tw-w-96 tw-bg-gray-300 tw-shadow-xl tw-my-10">   
        <figure>
          <a href={project.liveUrl} rel="noreferrer" target="_blank">
            <img src={project.image} alt={project.name + "preview"} />
          </a>
        </figure>
        <div className="tw-card-body">          
          <h2 className="tw-font-primary tw-text-violet-500 tw-text-3xl">{project.name}</h2>
          <p className="tw-font-primary tw-text-gray-800 tw-text-xl">{project.description}</p>
          <p className="tw-font-primary">● {project.category}</p>
          <p className="tw-font-primary tw-mb-5">● {project.tech}</p>
          <div className="tw-card-actions tw-justify-end">
            {
              project.liveUrl.length < 1 
              ? 
                <button className="tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-gray-500 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">LIVE</button>
              :
                <a href={project.liveUrl} rel="noreferrer" target="_blank" className="tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-violet-700 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-hover:bg-violet-800 tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">LIVE</a>
            }
            {
              project.repoUrl.length < 1 
              ?
                <button className="tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-gray-500 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">REPO</button>
              :
                <a href={project.repoUrl} rel="noreferrer" target="_blank" className="tw-text-gray-200 tw-inline-flex tw-items-center tw-bg-violet-700 tw-border-0 tw-py-1 tw-px-3 tw-focus:outline-none tw-hover:bg-violet-800 tw-rounded tw-mt-4 tw-md:mt-0 tw-font-primary tw-text-2xl">REPO</a>
            }            
          </div>
        </div>
      </div>
  )
}