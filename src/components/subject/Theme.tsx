import { Theme, ThemeProvider, css } from '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      secondary: string
      success: string
      info: string
      warn: string
      border: string
    }
  }
}

const theme = {
  color: {
    primary: 'hotpink',
    secondary: 'pink',
    success: 'green',
    info: 'skyblue',
    warn: 'orange',
    border: 'lightgray',
  },
}

const withTheme = ({ color }: Theme) =>
  css({
    padding: '16px',
    border: `1px solid ${color.border}`,

    h3: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: color.primary,
    },
    p: {
      color: color.secondary,
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
        background: color.warn,
      },
      '& .save': {
        background: color.success,
      },
    },
  })

export function WithTheme() {
  return (
    <ThemeProvider theme={theme}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div css={(emotionTheme) => withTheme(emotionTheme)} key={idx}>
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
    </ThemeProvider>
  )
}

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

export function NoTheme() {
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
