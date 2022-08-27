import styled from 'styled-components'

// data
import tools from 'data/tools.json' 

// components
import Tool from 'components/Tool'

// styles
const ToolsStyled = styled.div`
  padding: 1em .5em;

  .tools {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`

export default function Tools() {
  return (
    <ToolsStyled>
      <h2 className="q">How exactly?<br />
        With these great open source tools.
      </h2>
      <div className="tools">
        {tools.map(tool => (
          <Tool
            key={tool.name}
            name={tool.name}
            imageSrc={tool.imageSrc}
            link={tool.link}
          />
        ))}
      </div>
    </ToolsStyled>
  )
}