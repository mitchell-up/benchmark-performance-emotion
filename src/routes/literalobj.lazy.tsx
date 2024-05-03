import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { TogglesLiteral } from '../components/subjects/literalobj/TogglesLiteral'
import { TogglesObj } from '../components/subjects/literalobj/TogglesObj'

export const Route = createLazyFileRoute('/literalobj')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Object vs Literal (CssProp)'
      description='CssProp으로 적용하는 상황에서 Object와 Template Literal 형식의 스타일링 성능을 비교합니다.'
      compA={<TogglesLiteral />}
      compAName='Literal'
      compB={<TogglesObj />}
      compBName='Object'
    />
  )
}
