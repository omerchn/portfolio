import { useRouter } from 'next/router'
import styled from 'styled-components'

// styles
const ProjectStyled = styled.div`
  
`

export default function Project({ projectData, clickable }) {

  const { id, name } = projectData
  const router = useRouter()
  
  const handleClick = () => {
    if (!clickable) return
    router.push(projectData.id)
  }

  return (
    <ProjectStyled>
      <h2 onClick={handleClick}>
        {name}
      </h2>
    </ProjectStyled>
  )
}