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
  background: ${(props) =>
    props.theme.isDarkMode ? 'rgb(255 255 255 / 2%)' : 'rgb(0 0 0 / 2%)'};

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
