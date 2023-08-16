import ProjectCard from "./ProjectCard"
import projects from "../projects.json"

export default function ProjectsGrid() {
  return(
    <section id="projects" class="h-full text-gray-600 body-font bg-gray-950">
      <div class="container px-5 py-24 mx-auto h-fit">
        <div class="flex flex-wrap justify-around">
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