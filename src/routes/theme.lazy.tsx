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
      description='테마를 이용한 스타일링 시 Emotion의 ThemeProvider를 통한 방식과 Css Variable을 활용한 js 상수 값을 활용하는 방식의 성능을 비교합니다.'
      compA={<WithTheme />}
      compAName='Theme'
      compB={<NoTheme />}
      compBName='Constants'
    />
  )
}
