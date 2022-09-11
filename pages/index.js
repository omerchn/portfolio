import Head from 'next/head'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal"

// modules
import Bio from 'modules/Bio'
import Skills from 'modules/Skills'
import Tools from 'modules/Tools'
import Projects from 'modules/Projects'

// styles
const MainStyled = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 100%;
  }
  
  > div:last-child {
    width: fit-content;
  }

  hr {
    border: 0;
    width: 10em;
    height: .25em;
    margin-top: 2em;
    background: #f9f9fb;
  }
`

export default function Main() {
  return <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <MainStyled>
      <Fade
        triggerOnce
        cascade
        damping={.2}
      >
        <Bio />
        <Skills />
        <hr />
        <Tools />
        <hr />
        <Projects />
      </Fade>
    </MainStyled>
  </>
}
