import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'

// data
import tools from 'data/tools.json'

// components
import Tool from 'components/Tool'

// styles
const ToolsStyled = styled.div`
  width: fit-content;
  margin: 1em;
  padding: 1em 2em;
  padding-top: 1px;
  border-radius: 1em;
  transition: box-shadow 0.2s;

  ${(props) =>
    props.theme.isDarkMode
      ? `
        --dotColor: #414141;
        background: linear-gradient(360deg,#141C2E 21px,transparent 1%) 50%,linear-gradient(#141C2E 21px,transparent 1%) 50%,var(--dotColor);
        background-size: 22px 22px;
        box-shadow: 0 0 0 6px rgb(255 255 255 / 10%);
        &:hover {
          box-shadow: 0 0 0 12px rgb(255 255 255 / 10%);
        }
      `
      : `
        --dotColor: #d1d1d1;
        background: linear-gradient(360deg,#fafafa 21px,transparent 1%) 50%,linear-gradient(#fafafa 21px,transparent 1%) 50%,var(--dotColor);
        background-size: 22px 22px;
        box-shadow: 0 0 0 6px rgb(0 0 0 / 5%);
        &:hover {
          box-shadow: 0 0 0 12px rgb(0 0 0 / 5%);
        }
      `};

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    > :hover {
      z-index: 1;
    }
  }
`

export default function Tools() {
  return (
    <ToolsStyled>
      <h2 className="q">
        How exactly?
        <br />
        With these great open source tools.
      </h2>
      <div className="tools">
        <Fade
          triggerOnce
          direction="up"
          delay={200}
          duration={1000}
          cascade
          damping={0.1}
        >
          {tools.map((tool) => (
            <Tool key={tool.name} toolData={tool} withTooltip />
          ))}
        </Fade>
      </div>
    </ToolsStyled>
  )
}
