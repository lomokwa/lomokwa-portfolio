import ProjectCard from "./ProjectCard"
import projects from "../projects.json"

export default function ProjectsGrid() {
  return(
    <section id="projects" className="tw-h-fit tw-mt-24 tw-text-gray-600 tw-bg-gray-950">
      <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-h-fit"> 
        <h2 className="tw-flex tw-justify-center tw-text-4xl tw-text-violet-500 tw-font-primary">PROJECTS</h2>     
        <div className="tw-flex tw-flex-wrap tw-justify-around">
          
          {
            projects.map(project =>
              <ProjectCard key={project.id} project={project}/>
            )
          }
        </div>
      </div>
    </section>  
  )
}