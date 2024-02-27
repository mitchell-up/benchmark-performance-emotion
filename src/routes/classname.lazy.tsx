import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { ClassNameInfo, CssInfo } from '../components/subject/Classname'

export const Route = createLazyFileRoute('/classname')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='CssProp vs ClassName'
      compA={<CssInfo />}
      compAName='CssProp'
      compB={<ClassNameInfo />}
      compBName='ClassName'
    />
  )
}
