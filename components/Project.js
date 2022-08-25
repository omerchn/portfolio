import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// styles
const ProjectStyled = styled.div`

  button {
    > h2 {
      font-weight: normal;
      margin-bottom: 0;
    }
    > div {
      display: flex;
      align-items: center;
    }
  }
`

export default function Project({
  projectData,
  isClickable
}) {

  const { id, name } = projectData
  const router = useRouter()
  
  const handleClick = () => {
    if (!isClickable) return
    router.push(id)
  }

  return (
    <ProjectStyled>
      <button onClick={handleClick}>
        <h2>
          {name}
        </h2>
        {isClickable && (
          <div>
            <span>project page</span>
            <Image src="/ArrowRight.svg" alt="right arrow" height="20" width="20" />
          </div>
        )}
      </button>
    </ProjectStyled>
  )
}