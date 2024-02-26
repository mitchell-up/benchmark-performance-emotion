import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { CssObjButton, StyledObjButton } from '../components/subject/Button'

export const Route = createLazyFileRoute('/')({
  component: Styledcss,
})

function Styledcss() {
  return (
    <PageLayout
      title='Styled vs CssProp (Object)'
      compA={<StyledObjButton />}
      compAName='Styled'
      compB={<CssObjButton />}
      compBName='Css'
    />
  )
}
