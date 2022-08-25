import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// styles
const ProjectStyled = styled.div`

  .title {
    --icon-opacity: .1;
    --icon-x: .1em;

    &:hover {
      --icon-opacity: 1;
      --icon-x: .2em;
    }

    > h2 {
      margin: 0;
    }
    > a {
      display: flex;

      img {
        margin-top: .05em !important;
        opacity: var(--icon-opacity);
        transform: translateX(var(--icon-x));
        transition: .1s;
      }
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
      <button onClick={handleClick} className="title">
        <h2>
          {name}
        </h2>
        {isClickable && (
          <a>
            <span>project page</span>
            <Image src="/East.svg" alt="right arrow" height="20" width="20" />
          </a>
        )}
      </button>
    </ProjectStyled>
  )
}