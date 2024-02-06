import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Box, CssBaseline, CssVarsProvider } from '@mui/joy'
import Sidebar from '../components/SideNav'
import Header from '../components/Header'

// const TanStackRouterDevtools =
//   import.meta.env.NODE_ENV === 'production'
//     ? () => null // Render nothing in production
//     : React.lazy(() =>
//         // Lazy load in development
//         import('@tanstack/router-devtools').then((res) => ({
//           default: res.TanStackRouterDevtools,
//           // For Embedded Mode
//           // default: res.TanStackRouterDevtoolsPanel
//         })),
//       )

export const Route = createRootRoute({
  component: () => (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* <Suspense>
        <TanStackRouterDevtools />
      </Suspense> */}
    </CssVarsProvider>
  ),
})