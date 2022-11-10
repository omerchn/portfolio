import { useEffect, useState } from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import { Fade } from 'react-awesome-reveal'

// modules
import Bio from 'modules/Bio'
import Skills from 'modules/Skills'
import Tools from 'modules/Tools'
import Projects from 'modules/Projects'

// hooks
import useLocalStorage from 'hooks/useLocalStorage'

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
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', true)
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <ThemeProvider
        theme={{
          isDarkMode,
        }}
      >
        <MainStyled>
          <Fade cascade damping={0.2}>
            <Bio isDarkModeState={[isDarkMode, setIsDarkMode]} />
            <Skills />
            <Tools />
            <Projects />
          </Fade>
        </MainStyled>
      </ThemeProvider>
    </>
  )
}
