import { css } from '@emotion/react'
import { info, RENDER_COUNT } from './data'

const infoSeparateCss = css({
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
})

function InfoDynamicItem({ color }: { color: 'red' | 'green' | 'blue' }) {
  return (
    <ul css={infoSeparateCss}>
      {info.map((data) => (
        <li key={data.head} className='infoItem' css={{ color }}>
          <span className='head'>{data.head}</span>
          <p className='desc'>{data.desc}</p>
        </li>
      ))}
    </ul>
  )
}

export function InfoDynamic() {
  return (
    <div>
      {Array.from({ length: RENDER_COUNT }).map((_, idx) => (
        <>
          <InfoDynamicItem color='red' key={`red-${idx}`} />
          <InfoDynamicItem color='green' key={`blue-${idx}`} />
          <InfoDynamicItem color='blue' key={`green-${idx}`} />
        </>
      ))}
    </div>
  )
}
