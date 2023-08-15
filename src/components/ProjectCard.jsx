export default function ProjectCard({ project }) {
  return(
      <div className="card w-96 bg-base-100 shadow-xl">   
        <figure>
          <a href={project.liveUrl} rel="noreferrer" target="blank">
            <img src={project.image} alt={project.name + "preview"} />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="font-primary text-gray-200 text-3xl">{project.name}</h2>
          <p className="font-primary text-gray-300 text-xl mb-5">{project.description}</p>
          <div className="card-actions justify-end">
            <a href={project.liveUrl} rel="noreferrer" target="blank" className="btn btn-primary">LIVE</a>
            <a href={project.repoUrl} rel="noreferrer" target="blank" className="btn btn-primary">REPO</a>
          </div>
        </div>
      </div>
  )
}