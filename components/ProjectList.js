import styled from 'styled-components'
import Project from 'components/Project'

// styles
const ProjectListStyled = styled.div`
  
`

export default function ProjectList({ projects }) {
  return (
    <ProjectListStyled>
      {projects.map(project => (
        <Project
          key={project.id}
          projectData={project}
          clickable
        />
      ))}      
    </ProjectListStyled>
  )
}