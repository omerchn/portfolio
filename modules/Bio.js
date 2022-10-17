import Image from 'next/image'
import styled from 'styled-components'

// styles
const BioStyled = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2em;
  border-radius: 1em;
  background-image: url('images/general/waves-background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .socials {
    margin: 1em 0;

    a {
      cursor: pointer;
      margin: 0 0.5em;
      transition: filter 0.2s;

      &.linkedin {
        filter: grayscale(1);
      }
      &.github {
        filter: brightness(0) invert(1);
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
    box-shadow: 0 0 0 6px #ffffff3b;
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

export default function Bio() {
  return (
    <BioStyled>
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
