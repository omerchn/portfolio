import Head from 'next/head'
import styled from 'styled-components'

// layouts
import Bio from 'layouts/Bio'
import Overview from 'layouts/Overview'
import Skills from 'layouts/Skills'
import Projects from 'layouts/Projects'

// styles
const MainStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > hr {
    border: 0;
  }
`

export default function Main() {
  return <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <MainStyled>
      <Bio />
      <hr />
      <Overview />
      <hr />
      <Skills />
      <hr />
      {/* <Projects /> */}
    </MainStyled>
  </>
}
