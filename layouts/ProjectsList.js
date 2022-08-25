import styled from 'styled-components'
import Project from 'components/Project'

// styles
const ProjectsListStyled = styled.div`
  
`

export default function ProjectsList({ projects }) {
  return (
    <ProjectsListStyled>
      {projects.map(project => (
        <Project
          key={project.id}
          projectData={project}
          isClickable
        />
      ))}      
    </ProjectsListStyled>
  )
}