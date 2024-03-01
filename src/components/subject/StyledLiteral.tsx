import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Layout } from './Layout'

const StyledToggle = styled.label`
  display: inline-flex;

  & input[type='checkbox'] {
    cursor: pointer;
    position: relative;
    appearance: none;
    width: 48px;
    height: 28px;
    background-color: lightgray;
    border-radius: 16px;
    transition: background-color 0.2s ease-in-out;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: gray;
      border-radius: 50%;
      left: 4px;
      top: 4px;
      margin-block: auto;
      transition: transform 0.2s ease;
      box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.35);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      transition: background-color 0.2s ease-in-out;
    }

    &:active {
      &::after {
        background-color: white;
      }
    }
  }

  & input[type='checkbox']:checked {
    background-color: pink;

    &::before {
      background-color: white;
      transform: translateX(100%);
    }
  }
`

export function StyledToggles() {
  return (
    <Layout>
      {Array.from({ length: 12 }).map((_, idx) => (
        <StyledToggle key={idx}>
          <input type='checkbox' />
        </StyledToggle>
      ))}
    </Layout>
  )
}

//******************************************************************************

const cssObj = css`
  display: inline-flex;

  & input[type='checkbox'] {
    cursor: pointer;
    position: relative;
    appearance: none;
    width: 48px;
    height: 28px;
    background-color: lightgray;
    border-radius: 16px;
    transition: background-color 0.2s ease-in-out;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: gray;
      border-radius: 50%;
      left: 4px;
      top: 4px;
      margin-block: auto;
      transition: transform 0.2s ease;
      box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.35);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      transition: background-color 0.2s ease-in-out;
    }

    &:active {
      &::after {
        background-color: white;
      }
    }
  }

  & input[type='checkbox']:checked {
    background-color: pink;

    &::before {
      background-color: white;
      transform: translateX(100%);
    }
  }
`

export function CssToggles() {
  return (
    <Layout>
      {Array.from({ length: 12 }).map((_, idx) => (
        <label css={cssObj} key={idx}>
          <input type='checkbox' />
        </label>
      ))}
    </Layout>
  )
}
