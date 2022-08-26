import Image from 'next/image'
import styled from 'styled-components'

// styles
const BioStyled = styled.div`
  width: 100vw;
  padding-top: 1em;
  background: #f9fafa;

  .socials {
    margin: 1em 0;
    
    a {
      cursor: pointer;
      margin: 0 .5em;
      filter: grayscale(1);
      
      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .name {
    font-size: 1.8em;
    color: #999;
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
          <Image src="/linkedin.svg" alt="gmail" height="25" width="25" />
        </a>
      </div>
      <h1 className="name">my name is Omer Cohen.</h1>
      <div className="me-img"><Image src="/me.png" alt="me" height="100" width="100" /></div>
      <div className="job"><h1>I&apos;m a Fullstack Web Developer.</h1></div>
    </BioStyled>
  )
}