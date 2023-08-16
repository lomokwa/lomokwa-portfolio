import ProjectCard from "./ProjectCard"
import projects from "../projects.json"

export default function ProjectsGrid() {
  return(
    <section id="projects" class="h-fit mt-24 text-gray-600 bg-gray-950">
      <div class="container px-5 py-24 mx-auto h-fit"> 
        <h2 className="flex justify-center text-8xl text-violet-500 font-primary">PROJECTS</h2>     
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