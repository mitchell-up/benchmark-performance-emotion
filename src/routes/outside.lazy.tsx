import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { Insides, Outsides } from '../components/subject/Outside'

export const Route = createLazyFileRoute('/outside')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Inside vs Outside'
      compA={<Insides />}
      compAName='Inside'
      compB={<Outsides />}
      compBName='Outside'
    />
  )
}
