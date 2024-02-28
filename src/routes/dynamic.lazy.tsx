import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { ClassNameButtons, DynamicButtons } from '../components/subject/Dynamic'

export const Route = createLazyFileRoute('/dynamic')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Dynamic vs ClassName'
      compA={<DynamicButtons />}
      compAName='Dynamic'
      compB={<ClassNameButtons />}
      compBName='ClassName'
    />
  )
}
