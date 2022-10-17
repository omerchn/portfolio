import Head from 'next/head'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'

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
    display: flex;
    justify-content: center;
  }

  > div:last-child {
    width: fit-content;
  }
`

export default function Main() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <MainStyled>
        <Fade cascade damping={0.2}>
          <Bio />
          <Skills />
          <Tools />
          <Projects />
        </Fade>
      </MainStyled>
    </>
  )
}
