import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { NoTheme, WithTheme } from '../components/subject/Theme'

export const Route = createLazyFileRoute('/theme')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Theme vs Constants'
      compA={<WithTheme />}
      compAName='Theme'
      compB={<NoTheme />}
      compBName='Constants'
    />
  )
}
