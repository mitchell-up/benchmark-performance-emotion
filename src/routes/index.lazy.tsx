import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { TogglesStyled } from '../components/subjects/css-object/ToggleStyled'
import { TogglesCssProp } from '../components/subjects/css-object/ToggleCssProp'

export const Route = createLazyFileRoute('/')({
  component: Styledcss,
})

function Styledcss() {
  return (
    <PageLayout
      title='Styled vs CssProp (Object)'
      description='Object 형식으로 스타일링 하는 상황에서 styled와 cssProp의 성능을 비교합니다.'
      compA={<TogglesStyled />}
      compAName='Styled'
      compB={<TogglesCssProp />}
      compBName='CssProp'
    />
  )
}
