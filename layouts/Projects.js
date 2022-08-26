import styled from 'styled-components'
import Project from 'components/Project'

// data
import projects from 'data/projects.json'

// styles
const ProjectsStyled = styled.div`
  
`

export default function Projects({ projects }) {
  return (
    <ProjectsStyled>
      {projects.map(project => (
        <Project
          key={project.id}
          projectData={project}
          isClickable
        />
      ))}      
    </ProjectsStyled>
  )
}