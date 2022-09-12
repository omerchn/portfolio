import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// data
import Tools from 'data/tools.json' 

// components
import Tool from 'components/Tool'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// styles
const ProjectStyled = styled.div`
  margin: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 1em 2em;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .title {
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 700px) {
      justify-content: flex-start;
    }

    --icon-opacity: .1;
    --icon-x: 0em;

    .title-content {
      
      &:hover, &:focus {
        --icon-opacity: 1;
        --icon-x: .1em;
      }
      
      > h2 {
        text-align: start;
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

  }

  .tools {
    display: flex;
    flex-wrap: wrap;
  }

  .tasks {
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    list-style: none;
    padding: 0;
    
    @media screen and (max-width: 700px) {
      align-items: flex-start;
    }
    
    li:before {
      content: attr(data-icon);
      margin-right: .5em;
    }
  }

  .images-carousel {
    max-width: 480px;

    .carousel {
      overflow: visible;
    }

    .slider-wrapper {
      border-radius: .5em;
      box-shadow: 0 .1em .4em #c7c7db;
    }

    .thumbs {
      width: 0;
    }
    
    .thumb {
      margin: 0 .2em;
      border: 0;
      border-radius: .5em;
      transition: box-shadow .2s;
      
      cursor: pointer;
      &:hover {
        box-shadow: 0 .1em .25em #e5e5e6;
      }

      &.selected {
        box-shadow: 0 .1em .25em #c7c7db;
      }

      img {
        border-radius: .25em;
      }
    }

    .control-arrow {
      background: rgba(0,0,0,0.05);
      height: 1.5em;
      width: 1.5em;
      margin: auto .4em;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &.control-next {
        border-radius: .1em .5em .5em .1em;
      }
      &.control-prev {
        border-radius: .5em .1em .1em .5em;
      }
    }
  }
`

export default function Project({ projectData, isClickable }) {

  const { id, name, tools, tasks, images } = projectData
  const router = useRouter()
  
  const handleClick = () => isClickable && router.push(id)

  return (
    <ProjectStyled>
      <div className="title">
        <button className="title-content" onClick={handleClick}>
          <h2>{name}</h2>
          {isClickable && <a>
            <span>project page</span>
            <Image src="/images/general/east.svg" alt="right arrow" height="20" width="20" />
          </a>}
        </button>
      </div>

      <div className="tools">
        {tools.map(toolName => (
          <Tool key={toolName} toolData={Tools.find(tool => tool.name == toolName)} size="1.5em" />
        ))}
      </div>

      <ul className="tasks">
        {tasks.map(task => (
          <li key={task.text} data-icon={task.icon}>{task.text}</li>
        ))}
      </ul>
      
      <Carousel className="images-carousel" showStatus={false} showIndicators={false}>
          {images.map(image => (
            <div key={image} style={{ width: 'fit-content' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="project image" />
            </div>
          ))}
      </Carousel>
    </ProjectStyled>
  )
}