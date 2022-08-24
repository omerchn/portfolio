import Head from 'next/head'

// data
import projects from 'public/projects.json'

// components
import ProjectList from 'components/ProjectList'
import Header from 'components/Header'

// ssg
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
    
    <Header />
    <ProjectList projects={projects} />
  </>
}
