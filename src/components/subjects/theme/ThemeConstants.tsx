import { css } from '@emotion/react'
import { theme } from './data'

const baseCss = css({
  padding: '16px',
  border: `1px solid ${theme.color.border}`,

  h3: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: theme.color.primary,
  },
  p: {
    color: theme.color.secondary,
    marginBottom: '8px',
  },
  '& .actions': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingBlock: '8px',
      color: 'white',
    },
    '& .cancel': {
      background: theme.color.warn,
    },
    '& .save': {
      background: theme.color.success,
    },
  },
})

export function ThemeConstants() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div css={baseCss} key={idx}>
          <h3>Performance</h3>
          <p>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
          <div className='actions'>
            <button className='cancel'>Cancel</button>
            <button className='save'>Save</button>
          </div>
        </div>
      ))}
    </>
  )
}
