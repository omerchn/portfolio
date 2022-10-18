import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

// data
import Tools from 'data/tools.json'

// components
import Tool from 'components/Tool'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
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

    --icon-opacity: 0.6;
    --icon-x: 0.1em;

    .title-content {
      cursor: pointer;
      &:hover,
      &:focus {
        --icon-opacity: 1;
        --icon-x: 0.15em;
        --text-decoration: underline;
      }

      > h2 {
        text-align: start;
        margin: 0;
        font-style: italic;
      }

      > div {
        display: flex;
        margin-left: 0.1em;
        text-decoration: var(--text-decoration);

        img {
          filter: ${(props) =>
            props.theme.isDarkMode ? 'brightness(0) invert(1)' : ''};
          margin-top: 0.05em !important;
          opacity: var(--icon-opacity);
          transform: translateX(var(--icon-x));
          transition: transform 0.1s, opacity 0.1s, filter 0.2s;
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
      margin-right: 0.5em;
    }
  }

  .images-carousel {
    max-width: 480px;

    .carousel {
      overflow: visible;
    }

    .slider-wrapper {
      border-radius: 0.5em;
    }

    .thumbs-wrapper {
      margin: 1em 0;
    }

    .thumbs {
      width: 0;
    }

    .thumb {
      cursor: pointer;
      margin: 0 0.2em;
      border: 0;
      border-radius: 0.5em;
      transition: box-shadow 0.2s;
      --box-shadow-color: ${(props) =>
        props.theme.isDarkMode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 15%)'};

      &:focus,
      &:hover {
        box-shadow: 0 0 0 1px var(--box-shadow-color);
      }

      &.selected {
        box-shadow: 0 0 0 3px var(--box-shadow-color);
      }

      img {
        border-radius: 0.25em;
      }
    }

    .control-arrow {
      background: rgba(0, 0, 0, 0.2);
      height: 1.5em;
      width: 1.5em;
      margin: auto 0.4em;
      display: flex;
      justify-content: center;
      align-items: center;

      &.control-next {
        border-radius: 0.1em 0.5em 0.5em 0.1em;
      }
      &.control-prev {
        border-radius: 0.5em 0.1em 0.1em 0.5em;
      }
    }
  }
`

export default function Project({ projectData, isClickable }) {
  const { id, name, tools, tasks, images } = projectData
  // const router = useRouter()
  // const handleClick = () => isClickable && router.push(id)
  return (
    <ProjectStyled>
      <div className="title">
        <a
          className="title-content"
          // onClick={handleClick}
          href={projectData.demoLink}
          target="__blank"
        >
          <h2>{name}</h2>
          {/* {isClickable && ( */}
          <div>
            <span>view demo</span>
            <Image
              src="/images/general/east.svg"
              alt="right arrow"
              height="20"
              width="20"
            />
          </div>
          {/* )} */}
        </a>
      </div>

      <div className="tools">
        {tools.map((toolName) => (
          <Tool
            key={toolName}
            toolData={Tools.find((tool) => tool.name == toolName)}
            size="1.5em"
          />
        ))}
      </div>

      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.text} data-icon={task.icon}>
            {task.text}
          </li>
        ))}
      </ul>

      <Carousel
        className="images-carousel"
        showStatus={false}
        showIndicators={false}
      >
        {images.map((image) => (
          <div key={image} style={{ width: 'fit-content' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="project image" />
          </div>
        ))}
      </Carousel>
    </ProjectStyled>
  )
}
