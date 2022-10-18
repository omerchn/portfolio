import Image from 'next/image'
import styled from 'styled-components'

// components
import ThemeToggle from 'components/ThemeToggle'

// styles
const BioStyled = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2em;
  padding-top: 0em;
  background-image: url('images/general/waves-background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .socials {
    margin: 1em 0;

    a {
      cursor: pointer;
      margin: 0 0.5em;
      transition: filter 0.2s, opacity 0.2s;
      filter: ${(props) =>
        props.theme.isDarkMode ? 'invert(1)' : 'invert(0)'};
      opacity: ${(props) => (props.theme.isDarkMode ? '.75' : '.5')};

      &:hover {
        opacity: 1;
      }
    }
  }

  .me-img {
    height: 100px;
    width: fit-content;
    margin: auto;
    border-radius: 0.5em;
    overflow: hidden;
    margin-top: 2em;
    transition: box-shadow 0.2s;
    box-shadow: ${(props) =>
      props.theme.isDarkMode
        ? '0 0 0 6px rgb(255 255 255 / 25%)'
        : '0 0 0 6px rgb(0 0 0 / 10%)'};
  }

  .job {
    width: fit-content;
    margin: 2em auto;
    font-style: italic;

    .name {
      font-size: 1.8em;
    }
  }
`

export default function Bio({ isDarkModeState }) {
  return (
    <BioStyled>
      <ThemeToggle isDarkModeState={isDarkModeState} />
      <div className="socials">
        <a
          target="__blank"
          href="https://github.com/omercohen990"
          className="github"
        >
          <Image
            priority
            src="/images/general/github.svg"
            alt="github"
            height="25"
            width="25"
          />
        </a>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/omercohen990"
          className="linkedin"
        >
          <Image
            priority
            src="/images/general/linkedin.svg"
            alt="linkedin"
            height="25"
            width="25"
          />
        </a>
      </div>
      <div className="me-img">
        <Image
          priority
          src="/images/general/me.png"
          alt="me"
          height="100"
          width="100"
        />
      </div>
      <div className="job">
        <h1 className="name">My Name is Omer Cohen.</h1>
        <h1>I&apos;m a Fullstack Web Developer.</h1>
      </div>
    </BioStyled>
  )
}
