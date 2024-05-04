import { createLazyFileRoute } from '@tanstack/react-router'
import PageLayout from '../components/PageLayout'
import { InfoDynamic } from '../components/subjects/dynamic/InfoDynamic'
import { InfoClassname } from '../components/subjects/dynamic/InfoClassname'

export const Route = createLazyFileRoute('/dynamic')({
  component: Component,
})

function Component() {
  return (
    <PageLayout
      title='Dynamic vs ClassName'
      description='사용자로부터 동적으로 값을 받아서 처리해야하는 상황일 때, cssProp으로 그 값을 전달하는 방식과 미리 스타일된 className을 전달하는 방식의 성능을 비교합니다.'
      compA={<InfoDynamic />}
      compAName='Dynamic'
      compB={<InfoClassname />}
      compBName='ClassName'
    />
  )
}
