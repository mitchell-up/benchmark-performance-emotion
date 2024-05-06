import { css } from '@emotion/react'
import { Layout } from '../../layouts/Layout'
import { RENDER_COUNT } from './data'

const cssObj = css({
  display: 'inline-flex',

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

export function TogglesObjCssProp() {
  return (
    <Layout>
      {Array.from({ length: RENDER_COUNT }).map((_, idx) => (
        <label css={cssObj} key={idx}>
          <input type='checkbox' />
        </label>
      ))}
    </Layout>
  )
}
