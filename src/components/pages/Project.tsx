import {projectData, studyData} from '../../mock'
import ProjectCard from '../project/ProjectCard'

export default function Project() {
  return (
    <div className="mobile:px-10 bg-gray-200 p-32">
      <div className="mb-5 text-4xl font-bold">Career</div>
      <section className="desktop:grid-cols-2 grid grid-cols-1 gap-8">
        {projectData.map((el) => (
          <ProjectCard
            key={el.id}
            projectData={el}
          />
        ))}
      </section>
      <div className="mb-5 mt-5 text-4xl font-bold">Study</div>
      <section className="desktop:grid-cols-2 grid grid-cols-1 gap-8">
        {studyData.map((el) => (
          <ProjectCard
            key={el.id}
            projectData={el}
          />
        ))}
      </section>
    </div>
  )
}
