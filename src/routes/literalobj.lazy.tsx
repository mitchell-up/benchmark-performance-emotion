import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { ToggleLiteral, ToggleObj } from '../components/subject/Complex'

export const Route = createLazyFileRoute('/literalobj')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Object vs Literal (CssProp)'
      compA={<ToggleObj />}
      compAName='Object'
      compB={<ToggleLiteral />}
      compBName='Literal'
    />
  )
}
