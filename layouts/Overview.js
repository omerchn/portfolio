import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist-component'

// data
import Skills from 'data/overview.json'

// styles
const OverviewStyled = styled.div`
  margin: 1em 0;
  overflow: hidden;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes cursor-blink {
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0 }
  }

  .typist {
    margin: 0;
    min-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    align-self: flex-end;
    font-size: 2.5em;
  }

  .cursor {
    animation: cursor-blink 1.5s infinite;
  }
`

export default function Overview() {
  return (
    <OverviewStyled>
      <h2 className="q">what does that mean? <br />
        well:
      </h2>
      <h1 className="typist">I make &nbsp;
        <Typist
          loop
          typingDelay={125}
          backspaceDelay={75}
          cursor={<span className="cursor">_</span>}
        >
          {Skills.map(skill => <React.Fragment key={skill.id}>
            <span style={{ color: skill.color }}>{skill.name}</span>
            <Typist.Delay ms={1500} />
            <Typist.Backspace count={skill.name.length} />
            <Typist.Delay ms={500} />
          </React.Fragment>)}
        </Typist>
      </h1>
    </OverviewStyled>
  )
}