export default function ProjectCard({ project }) {
  return(
      <div className="card w-96 bg-gray-300 shadow-xl my-10">   
        <figure>
          <a href={project.liveUrl} rel="noreferrer" target="_blank">
            <img src={project.image} alt={project.name + "preview"} />
          </a>
        </figure>
        <div className="card-body">          
          <h2 className="font-primary text-violet-500 text-3xl">{project.name}</h2>
          <p className="font-primary text-gray-800 text-xl">{project.description}</p>
          <p className="font-primary">● {project.category}</p>
          <p className="font-primary mb-5">● {project.tech}</p>
          <div className="card-actions justify-end">
            {
              project.liveUrl.length < 1 
              ? 
                <a className="text-gray-200 inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none rounded mt-4 md:mt-0 font-primary text-2xl">LIVE</a>
              :
                <a href={project.liveUrl} rel="noreferrer" target="_blank" className="text-gray-200 inline-flex items-center bg-violet-700 border-0 py-1 px-3 focus:outline-none hover:bg-violet-800 rounded mt-4 md:mt-0 font-primary text-2xl">LIVE</a>
            }
            {
              project.repoUrl.length < 1 
              ?
                <a className="text-gray-200 inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none rounded mt-4 md:mt-0 font-primary text-2xl">REPO</a>
              :
                <a href={project.repoUrl} rel="noreferrer" target="_blank" className="text-gray-200 inline-flex items-center bg-violet-700 border-0 py-1 px-3 focus:outline-none hover:bg-violet-800 rounded mt-4 md:mt-0 font-primary text-2xl">REPO</a>
            }            
          </div>
        </div>
      </div>
  )
}