import { css } from '@emotion/react'

const btnClassCss = css({
  fontSize: '20px',
  padding: '12px 24px',
  '&.contained': {
    background: 'lightgray',
  },
  '&.outlined': {
    border: '1px solid lightgray',
  },
})

function ClassNameButton({ variant }: { variant: 'contained' | 'outlined' }) {
  return (
    <button className={variant} css={btnClassCss}>
      버튼
    </button>
  )
}

export function ClassNameButtons() {
  return (
    <div>
      <ClassNameButton variant='contained' />
      <ClassNameButton variant='outlined' />
      <ClassNameButton variant='contained' />
      <ClassNameButton variant='outlined' />
      <ClassNameButton variant='contained' />
      <ClassNameButton variant='outlined' />
    </div>
  )
}

const btnDynamicCss = css({
  fontSize: '20px',
  padding: '12px 24px',
})

function DynamicButton({ variant }: { variant: 'contained' | 'outlined' }) {
  return (
    <button
      css={[
        btnDynamicCss,
        variant === 'contained' && {
          background: 'lightgray',
        },
        variant === 'outlined' && {
          border: '1px solid lightgray',
        },
      ]}
    >
      버튼
    </button>
  )
}

export function DynamicButtons() {
  return (
    <div>
      <DynamicButton variant='contained' />
      <DynamicButton variant='outlined' />
      <DynamicButton variant='contained' />
      <DynamicButton variant='outlined' />
      <DynamicButton variant='contained' />
      <DynamicButton variant='outlined' />
    </div>
  )
}
