import Image from 'next/image'
import styled from 'styled-components'

// styles
const ToolStyled = styled.div`
  position: relative;
  overflow: visible;
  margin: .5em;
  transition: transform .2s;
  
  width: ${props => props.size || 'unset'};
  height: ${props => props.size || 'unset'}; 
  
  &:hover, &:focus-within {
    z-index: 1;
    transform: scale(1.1);

    .tooltip {
      pointer-events: inherit;
      transform: translate(-50%);
      opacity: 1;
    }
  }

  .tooltip {
    pointer-events: none;
    display: flex;
    align-items: center;
    top: 100%;
    transform: translate(-50%);
    opacity: 0;
    position: absolute;
    left: 50%;
    padding: .2em .5em;
    border-radius: .5em;
    background: #333;
    color: #fff;
    border: 1px solid #999;
    transition: opacity .2s;

    &:hover {
      text-decoration: underline;
    }
    
    > span {
      margin-left: .2em !important;
      width: ${props => props.size || '1em'} !important;
      height: ${props => props.size || '1em'} !important;
    }
  }
`

export default function Tool({ toolData, size, withTooltip }) {

  const { name, imageSrc, link } = toolData

  return (
    <ToolStyled size={size} title={!withTooltip ? name : ''}>
      <Image src={imageSrc} height="30" width="30" alt={name} />
      {withTooltip && (
        <a className="tooltip" target="__blank" href={link}>
          {name}
          <Image src="/images/general/open-in-new.svg" height="16" width="16" alt={name}  />
        </a>
      )}
    </ToolStyled>
  )
}