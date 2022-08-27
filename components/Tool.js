import Image from 'next/image'
import styled from 'styled-components'

// styles
const SkillStyled = styled.a`
  cursor: pointer;
  margin: .5em;
`

export default function Skill({ name, imageSrc, link, isActive }) {
  return (
    <SkillStyled className="skill" target="__blank" href={link} title={name}>
      <Image src={imageSrc} height="30" width="30" alt={name}  />
    </SkillStyled>
  )
}