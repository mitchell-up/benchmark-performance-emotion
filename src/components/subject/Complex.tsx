import { css } from '@emotion/react'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

export interface ToggleButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const literalCss = css`
  display: inline-flex;

  &.--disabled {
    opacity: 0.3;
  }

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

    /* hover, active content */
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

export const ToggleLiteral = forwardRef(function ToggleButton(
  props: ToggleButtonProps,
  ref: Ref<HTMLInputElement>,
) {
  const { disabled, ...rest } = props
  return (
    <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <label css={literalCss} key={idx}>
          <input type='checkbox' ref={ref} disabled={disabled} {...rest} />
        </label>
      ))}
    </div>
  )
})

const objCss = css({
  display: 'inline-flex',

  '&.--disabled': {
    opacity: 0.3,
  },

  "& input[type='checkbox']": {
    cursor: 'pointer',
    position: 'relative',
    appearance: 'none',
    width: '48px',
    height: '28px',
    backgroundColor: 'lightgray',
    borderRadius: '16px',
    transition: 'background-color 0.2s ease-in-out',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '20px',
      height: '20px',
      backgroundColor: 'gray',
      borderRadius: '50%',
      left: '4px',
      top: '4px',
      marginBlock: 'auto',
      transition: 'transform 0.2s ease',
      boxShadow: '-2px 2px 10px 0px rgba(0, 0, 0, 0.35)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: 'transparent',
      transition: 'background-color 0.2s ease-in-out',
    },

    '&:active': {
      '&::after': {
        backgroundColor: 'white',
      },
    },
  },

  "& input[type='checkbox']:checked": {
    backgroundColor: 'pink',

    '&::before': {
      backgroundColor: 'white',
      transform: 'translateX(100%)',
    },
  },
})

export const ToggleObj = forwardRef(function ToggleButton(
  props: ToggleButtonProps,
  ref: Ref<HTMLInputElement>,
) {
  const { disabled, ...rest } = props
  return (
    <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <label css={objCss} key={idx}>
          <input type='checkbox' ref={ref} disabled={disabled} {...rest} />
        </label>
      ))}
    </div>
  )
})
