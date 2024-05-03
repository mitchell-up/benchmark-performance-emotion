import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { SeparateInfo } from '../components/subjects/classname/SeparateInfo'
import { ClassNameInfo } from '../components/subjects/classname/ClassNameInfo'

export const Route = createLazyFileRoute('/classname')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Separate vs ClassName'
      description='각 요소에 분리된 cssProp을 이용하는 방법과 하나의 cssProp과 className을 조합하는 방법의 성능을 비교합니다.'
      compA={<SeparateInfo />}
      compAName='Separate'
      compB={<ClassNameInfo />}
      compBName='ClassName'
    />
  )
}
