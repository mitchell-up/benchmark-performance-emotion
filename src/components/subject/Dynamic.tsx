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

function ClassNameInfo({ color }: { color: 'red' | 'green' | 'blue' }) {
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

export function ClassNameInfos() {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <>
          <ClassNameInfo color='red' key={`red-${idx}`} />
          <ClassNameInfo color='green' key={`blue-${idx}`} />
          <ClassNameInfo color='blue' key={`green-${idx}`} />
        </>
      ))}
    </div>
  )
}

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

function DynamicInfo({ color }: { color: 'red' | 'green' | 'blue' }) {
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

export function DynamicInfos() {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, idx) => (
        <>
          <DynamicInfo color='red' key={`red-${idx}`} />
          <DynamicInfo color='green' key={`blue-${idx}`} />
          <DynamicInfo color='blue' key={`green-${idx}`} />
        </>
      ))}
    </div>
  )
}
