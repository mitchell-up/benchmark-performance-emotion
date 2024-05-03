import { css } from '@emotion/react'
import { info } from './data'

const ulCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

const liCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const headCss = css({
  fontWeight: 'bold',
})

const descCss = css({
  color: 'gray',
})

export function SeparateInfo() {
  return (
    <ul css={ulCss}>
      {info.map((data) => (
        <li key={data.head} css={liCss}>
          <span css={headCss}>{data.head}</span>
          <p css={descCss}>{data.desc}</p>
        </li>
      ))}
    </ul>
  )
}
