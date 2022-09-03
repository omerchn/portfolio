import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist-component'

// data
import skills from 'data/skills.json'

// styles
const SkillsStyled = styled.div`
  padding: 1em;
  overflow: hidden;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;


  .typist {
    margin: 0;
    min-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    align-self: flex-end;
    font-size: 2.5em;

    @keyframes cursor-blink {
      0% { opacity: 0 }
      50% { opacity: 1 }
      100% { opacity: 0 }
    }
    
    .cursor {
      animation: cursor-blink 1.5s infinite;
    }
  }

`

export default function Skills() {
  return (
    <SkillsStyled>
      <h2 className="q">what does that mean? <br />
        well, I build:
      </h2>
      <h1 className="typist">
        <Typist
          loop
          typingDelay={125}
          backspaceDelay={75}
          cursor={<span className="cursor">_</span>}
        >
          {skills.map(skill => <React.Fragment key={skill.name}>
            <span style={{ color: skill.color }}>{skill.name}</span>
            <Typist.Delay ms={1500} />
            <Typist.Backspace count={skill.name.length} />
            <Typist.Delay ms={500} />
          </React.Fragment>)}
        </Typist>
      </h1>
    </SkillsStyled>
  )
}