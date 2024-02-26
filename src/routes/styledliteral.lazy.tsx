import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import {
  CssLiteralButton,
  StyledLiteralButton,
} from '../components/subject/Button'

export const Route = createLazyFileRoute('/styledliteral')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Styled vs CssProp (Literal)'
      compA={<StyledLiteralButton />}
      compAName='Styled'
      compB={<CssLiteralButton />}
      compBName='Css'
    />
  )
}
