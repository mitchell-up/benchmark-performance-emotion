import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div
      css={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}
    >
      {children}
    </div>
  )
}
