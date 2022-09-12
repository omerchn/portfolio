import Image from 'next/image'
import styled from 'styled-components'

// styles
const BioStyled = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 1em;
  padding: 1em 2em;
  border-radius: 1em;
  background: #fafaff;


  .socials {
    margin: 1em 0;
    
    a {
      cursor: pointer;
      margin: 0 .5em;
      filter: grayscale(1);
      transition: filter .2s;
      
      &:hover, &:focus {
        filter: grayscale(0);
      }
    }
  }

  .name {
    font-size: 1.8em;
    color: #888;
  }

  .me-img {
    height: 100px;
    width: fit-content;
    margin: auto;
    margin-top: 2em;
    box-shadow: -6px 6px 0px #ddd;
  }

  .job {
    width: fit-content;
    margin: auto;
    color: #666;
  }
`

export default function Bio() {
  return (
    <BioStyled>
      <div className="socials">
        <a target="__blank" href="https://www.linkedin.com/in/omercohen990/">
          <Image priority src="/images/general/linkedin.svg" alt="linkedin" height="25" width="25" />
        </a>
      </div>
      <h1 className="name">My Name is Omer Cohen.</h1>
      <div className="me-img"><Image priority src="/images/general/me.png" alt="me" height="100" width="100" /></div>
      <div className="job"><h1>I&apos;m a Fullstack Web Developer.</h1></div>
    </BioStyled>
  )
}
