import {projectData} from '../../mock'
import ProjectCard from '../project/ProjectCard'

export default function Project() {
  return (
    <section className="grid grid-cols-2 gap-8 bg-gray-200 p-32">
      {projectData.map((el) => (
        <ProjectCard
          key={el.id}
          projectData={el}
        />
      ))}
    </section>
  )
}
