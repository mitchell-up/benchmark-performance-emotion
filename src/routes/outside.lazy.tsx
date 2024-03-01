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
      description='스타일을 컴포넌트의 내부에서 선언하는 방식과 컴포넌트 바깥에서 선언하고 가져다쓰는 방식의 성능을 비교합니다.'
      compA={<Insides />}
      compAName='Inside'
      compB={<Outsides />}
      compBName='Outside'
    />
  )
}
