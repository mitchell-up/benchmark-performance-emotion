import { css } from '@emotion/react'

function ComposeButton({ variant }: { variant: 'contained' | 'outlined' }) {
  return (
    <button
      css={{
        fontSize: '20px',
        padding: '12px 24px',
        ...(variant === 'contained' && {
          background: 'lightgray',
        }),
        ...(variant === 'outlined' && {
          border: '1px solid lightgray',
        }),
      }}
    >
      버튼
    </button>
  )
}

export function ComposeButtons() {
  return (
    <div>
      <ComposeButton variant='contained' />
      <ComposeButton variant='outlined' />
      <ComposeButton variant='contained' />
      <ComposeButton variant='outlined' />
      <ComposeButton variant='contained' />
      <ComposeButton variant='outlined' />
    </div>
  )
}

const btnCss = css({
  fontSize: '20px',
  padding: '12px 24px',
})

function SeparateButton({ variant }: { variant: 'contained' | 'outlined' }) {
  return (
    <button
      css={[
        btnCss,
        {
          ...(variant === 'contained' && {
            background: 'lightgray',
          }),
          ...(variant === 'outlined' && {
            border: '1px solid lightgray',
          }),
        },
      ]}
    >
      버튼
    </button>
  )
}

export function SeparateButtons() {
  return (
    <div>
      <SeparateButton variant='contained' />
      <SeparateButton variant='outlined' />
      <SeparateButton variant='contained' />
      <SeparateButton variant='outlined' />
      <SeparateButton variant='contained' />
      <SeparateButton variant='outlined' />
    </div>
  )
}
