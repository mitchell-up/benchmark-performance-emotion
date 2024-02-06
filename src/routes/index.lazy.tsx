import { createLazyFileRoute } from '@tanstack/react-router';
import PageLayout from '../components/PageLayout';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <PageLayout title='Home'>
      <h3>Welcome Home!</h3>
    </PageLayout>
  )
}