import Head from 'next/head'
import styled from 'styled-components'

// data
import projects from 'public/projects.json'

// layouts
import ProjectList from 'layouts/ProjectList'

// components
import Header from 'components/Header'
import Skills from 'components/Skills'

// styles
const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const getStaticProps = () => {
  return {
    props: { projects }
  }
}

export default function Main({ projects }) {
  return <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <MainStyled>
      <Header />
      <Skills />
      <ProjectList projects={projects} />
    </MainStyled>
  </>
}
