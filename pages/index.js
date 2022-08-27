import Head from 'next/head'
import styled from 'styled-components'

// layouts
import Bio from 'layouts/Bio'
import Skills from 'layouts/Skills'
import Tools from 'layouts/Tools'
import Projects from 'layouts/Projects'

// styles
const MainStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Main() {
  return <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <MainStyled>
      <Bio />
      <Skills />
      <Tools />
      <Projects />
    </MainStyled>
  </>
}
