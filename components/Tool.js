import Image from 'next/image'
import styled from 'styled-components'

// styles
const SkillStyled = styled.div`
  position: relative;
  overflow: visible;
  margin: .5em;

  .tooltip {
    display: flex;
    align-items: center;
    top: 100%;
    transform: translate(-50%, 40%);
    opacity: 0;
    position: absolute;
    left: 50%;
    padding: .2em .5em;
    border-radius: .5em;
    background: #333;
    color: #fff;
    border: 1px solid #999;
    transition: opacity .2s, transform .2s;

    &:hover {
      text-decoration: underline;
    }
    
    > span {
      margin-left: .2em !important;
      width: 1em !important;
      height: 1em !important;
    }
  }

  &:hover, &:focus {
    z-index: 1;

    .tooltip {
      transform: translate(-50%, 20%);
      opacity: 1;
    }
  }
`

export default function Skill({ name, imageSrc, link }) {
  return (
    <SkillStyled>
      <Image src={imageSrc} height="30" width="30" alt={name}  />
      <a className="tooltip" target="__blank" href={link}>
        {name}
        <Image src="/images/open-in-new.svg" height="15" width="15" alt={name}  />
      </a>
    </SkillStyled>
  )
}