import Image from 'next/image'
import styled from 'styled-components'

// styles
const BioStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9fafa;

  .name {
    font-size: 1.8em;
  }

  .me-img {
    height: 100px;
    width: fit-content;
    margin: auto;
    overflow: hidden;
    box-shadow: -6px 6px 0px #ddd;
  }

  .job {
    width: fit-content;
    margin: auto;
  }
`

export default function Bio() {
  return (
    <BioStyled>
      <h1 className="name">my name is Omer Cohen.</h1>
      <div className="me-img"><Image src="/me.png" alt="me" height="100" width="100" /></div>
      <div className="job"><h1>I&apos;m a Fullstack Web Developer.</h1></div>
    </BioStyled>
  )
}