import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { ComposeButtons, SeparateButtons } from '../components/subject/Compose'

export const Route = createLazyFileRoute('/compose')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Compose vs Separate'
      compA={<ComposeButtons />}
      compAName='Compose'
      compB={<SeparateButtons />}
      compBName='Separate'
    />
  )
}
