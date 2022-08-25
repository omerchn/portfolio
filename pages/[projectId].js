import Head from 'next/head'

// data
import projects from 'data/projects.json'

// components
import Project from 'components/Project'

export const getStaticPaths = () => {
  return {
    paths: projects.map(project => ({ params: { projectId: project.id }})),
    fallback: false
  }
}
export const getStaticProps = ({ params: { projectId } }) => {
  return {
    props: { 
      projectData: projects.find(project => project.id == projectId)
    }
  }
}

export default function ProjectPage({ projectData }) {
  return <>
    <Head>
      <title>{`Project - ${projectData.name}`}</title>
    </Head>

    <Project projectData={projectData} />
  </>
}