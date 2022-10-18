import styled from 'styled-components'
import Image from 'next/image'

const ThemeToggleStyled = styled.div`
  padding: 1em 0;

  > button {
    transition: filter 0.2s;
    filter: ${(props) =>
      props.theme.isDarkMode ? 'brightness(0) invert(1)' : ''};
  }
`

export default function ThemeToggle({ isDarkModeState }) {
  const [isDarkMode, setIsDarkMode] = isDarkModeState
  return (
    <ThemeToggleStyled>
      {isDarkMode ? (
        <button onClick={() => setIsDarkMode(false)} data-tooltip="light mode">
          <Image
            src="/images/general/light-mode.svg"
            height="30"
            width="30"
            alt="light mode"
          />
        </button>
      ) : (
        <button onClick={() => setIsDarkMode(true)} data-tooltip="dark mode">
          <Image
            src="/images/general/dark-mode.svg"
            height="30"
            width="30"
            alt="dark theme"
          />
        </button>
      )}
    </ThemeToggleStyled>
  )
}
