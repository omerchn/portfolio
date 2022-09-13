import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'

// components
import Project from 'components/Project'

// data
import projects from 'data/projects.json'

// styles
const ProjectsStyled = styled.div`
  padding: 1em;
`

export default function Projects() {
  return (
    <ProjectsStyled>
      <h2 className="q">
        Examples?
        <br />
        Sure!
      </h2>
      <Fade className="fade" cascade damping={0.1}>
        {projects.map((project) => (
          <Project key={project.id} projectData={project} isClickable />
        ))}
      </Fade>
    </ProjectsStyled>
  )
}
