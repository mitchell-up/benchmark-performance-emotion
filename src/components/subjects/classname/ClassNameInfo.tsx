import { css } from '@emotion/react'
import { info } from './data'

const infoCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  '.infoItem': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.head': {
      fontWeight: 'bold',
    },

    '.desc': {
      color: 'gray',
    },
  },
})

export function ClassNameInfo() {
  return (
    <ul css={infoCss}>
      {info.map((data) => (
        <li key={data.head} className='infoItem'>
          <span className='head'>{data.head}</span>
          <p className='desc'>{data.desc}</p>
        </li>
      ))}
    </ul>
  )
}
