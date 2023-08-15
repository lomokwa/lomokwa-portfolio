import ProjectCard from "./ProjectCard"
import projects from "../projects.json"

export default function PorjectsGrid() {
  return(
    <section id="projects" class="h-screen border border-red-500 text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
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