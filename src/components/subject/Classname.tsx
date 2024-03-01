import { css } from '@emotion/react'

const info = [
  { head: '이름', desc: '홍길동' },
  { head: '닉네임', desc: '홍길동과아버지' },
  { head: '전화번호', desc: '02-8282-8282' },
  { head: '성별', desc: '남성' },
  { head: '이름', desc: '홍길동' },
  { head: '닉네임', desc: '홍길동과아버지' },
  { head: '전화번호', desc: '02-8282-8282' },
  { head: '성별', desc: '남성' },
  { head: '이름', desc: '홍길동' },
  { head: '닉네임', desc: '홍길동과아버지' },
  { head: '전화번호', desc: '02-8282-8282' },
  { head: '성별', desc: '남성' },
]

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
