import { css } from '@emotion/react'
import styled from '@emotion/styled'

const styleObj = {
  background: 'blue',
  color: 'white',
  borderRadius: '8px',
  padding: '8px 16px',
  cursor: 'pointer',
  '&:hover': {
    background: 'skyblue',
  },
  '&:active': {
    transform: 'scale(0.96)',
  },
}

const StyledBtn = styled.button(styleObj)

export function StyledObjButton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <StyledBtn key={idx}>Button</StyledBtn>
      ))}
    </div>
  )
}

const btnCss = css(styleObj)

export function CssObjButton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <button css={btnCss} key={idx}>
          Button
        </button>
      ))}
    </div>
  )
}

const styleLiteral = `
  background: blue;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
  &:hover {
    background: skyblue;
  }
  &:active: {
    transform: scale(0.96);
  }
`

const StyledLiteralBtn = styled.button(styleLiteral)

export function StyledLiteralButton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <StyledLiteralBtn key={idx}>Button</StyledLiteralBtn>
      ))}
    </div>
  )
}

const btnLiteralCss = css(styleLiteral)

export function CssLiteralButton() {
  return (
    <div>
      {Array.from({ length: 10 }).map((_, idx) => (
        <button css={btnLiteralCss} key={idx}>
          Button
        </button>
      ))}
    </div>
  )
}
