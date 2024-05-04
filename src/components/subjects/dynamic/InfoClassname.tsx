import { css } from '@emotion/react'
import { info, RENDER_COUNT } from './data'

const infoCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  '& .infoItem': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .head': {
      fontWeight: 'bold',
    },

    '& .desc': {
      color: 'gray',
    },
  },

  '&.red': {
    color: 'red',
  },
  '&.green': {
    color: 'green',
  },
  '&.blue': {
    color: 'blue',
  },
})

function InfoClassnameItem({ color }: { color: 'red' | 'green' | 'blue' }) {
  return (
    <ul css={infoCss} className={color}>
      {info.map((data) => (
        <li key={data.head} className='infoItem'>
          <span className='head'>{data.head}</span>
          <p className='desc'>{data.desc}</p>
        </li>
      ))}
    </ul>
  )
}

export function InfoClassname() {
  return (
    <div>
      {Array.from({ length: RENDER_COUNT }).map((_, idx) => (
        <>
          <InfoClassnameItem color='red' key={`red-${idx}`} />
          <InfoClassnameItem color='green' key={`blue-${idx}`} />
          <InfoClassnameItem color='blue' key={`green-${idx}`} />
        </>
      ))}
    </div>
  )
}
