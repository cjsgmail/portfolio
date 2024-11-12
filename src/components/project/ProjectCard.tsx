import {ProjectDataEl} from '../../type'
import ProjectIconButton from '../button/ProjectIconButton'

type Props = {
  projectData: ProjectDataEl
}

export default function ProjectCard({projectData}: Props) {
  return (
    <div className="flex h-fit w-full flex-col rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-2 flex h-10 w-fit rounded-lg bg-sky-500 p-2 font-extrabold text-white">
        {projectData.name}
      </div>
      <div className="mb-2 font-thin">{projectData.date}</div>
      <div className="mb-2 border-b border-gray-300"></div>
      <div className="mb-2 font-extrabold">{projectData.shortIntro}</div>
      <div className="mb-2 flex flex-col">
        {projectData.dev.map((el, idx) => (
          <div
            key={idx}
            className="flex flex-row"
          >
            <div className="mr-2 text-2xl font-extrabold">&#183;</div>
            <div className="flex flex-col justify-center">{el}</div>
          </div>
        ))}
      </div>
      <div className="mb-2 rounded-lg bg-indigo-300 p-2 font-bold text-white">
        {projectData.skill}
      </div>
      <div className="flex flex-row">
        {projectData.url && (
          <ProjectIconButton
            url={projectData.url}
            icon={'line-md:link'}
          >
            URL
          </ProjectIconButton>
        )}
        {projectData.github && (
          <ProjectIconButton
            url={projectData.github}
            icon={'mdi:github'}
          >
            GitHub
          </ProjectIconButton>
        )}
        {projectData.blog && (
          <ProjectIconButton
            url={projectData.blog}
            icon={'simple-icons:velog'}
          >
            Blog
          </ProjectIconButton>
        )}
        {projectData.ui && (
          <ProjectIconButton
            url={projectData.ui}
            icon={'material-symbols:image-outline'}
          >
            UI
          </ProjectIconButton>
        )}
      </div>
    </div>
  )
}
