import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { ToggleLiteral, ToggleObj } from '../components/subject/ObjectLiteral'

export const Route = createLazyFileRoute('/literalobj')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Object vs Literal (CssProp)'
      description='CssProp으로 적용하는 상황에서 Object와 Template Literal 형식의 스타일링 성능을 비교합니다.'
      compA={<ToggleLiteral />}
      compAName='Literal'
      compB={<ToggleObj />}
      compBName='Object'
    />
  )
}
