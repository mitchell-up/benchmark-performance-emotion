import GlobalStyles from '@mui/joy/GlobalStyles'
import Avatar from '@mui/joy/Avatar'
import Box from '@mui/joy/Box'
import Divider from '@mui/joy/Divider'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton'
import ListItemContent from '@mui/joy/ListItemContent'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'

import ColorSchemeToggle from './ColorSchemeToggle'
import { closeSidebar } from '../utils'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'

// function Toggler({
//   defaultExpanded = false,
//   renderToggle,
//   children,
// }: {
//   defaultExpanded?: boolean;
//   children: React.ReactNode;
//   renderToggle: (params: {
//     open: boolean;
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   }) => React.ReactNode;
// }) {
//   const [open, setOpen] = React.useState(defaultExpanded);
//   return (
//     <React.Fragment>
//       {renderToggle({ open, setOpen })}
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateRows: open ? '1fr' : '0fr',
//           transition: '0.2s ease',
//           '& > *': {
//             overflow: 'hidden',
//           },
//         }}
//       >
//         {children}
//       </Box>
//     </React.Fragment>
//   );
// }

export default function Sidebar() {
  const navigate = useNavigate()
  const { location } = useRouterState()

  const sideMenus = [
    {
      content: 'Styled vs CssProp (Object)',
      isSelected: location.pathname === '/',
      onClick: () => {
        navigate({ to: '/' })
      },
    },
    {
      content: 'Styled vs CssProp (Template Literal)',
      isSelected: location.pathname === '/styledliteral',
      onClick: () => {
        navigate({ to: '/styledliteral' })
      },
    },
    {
      content: 'Object vs Literal (CssProp)',
      isSelected: location.pathname === '/literalobj',
      onClick: () => {
        navigate({ to: '/literalobj' })
      },
    },
    {
      content: 'Inside vs Outside',
      isSelected: location.pathname === '/outside',
      onClick: () => {
        navigate({ to: '/outside' })
      },
    },
    {
      content: 'Separate vs ClassName',
      isSelected: location.pathname === '/classname',
      onClick: () => {
        navigate({ to: '/classname' })
      },
    },
    {
      content: 'Dynamic vs ClassName',
      isSelected: location.pathname === '/dynamic',
      onClick: () => {
        navigate({ to: '/dynamic' })
      },
    },
    {
      content: 'Theme vs Constants',
      isSelected: location.pathname === '/theme',
      onClick: () => {
        navigate({ to: '/theme' })
      },
    },
  ]

  return (
    <Sheet
      className='Sidebar'
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className='Sidebar-overlay'
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Typography level='title-lg'>Benchmark Emotion</Typography>
        <ColorSchemeToggle sx={{ ml: 'auto' }} />
      </Box>

      {/* 메뉴들 */}
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size='sm'
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          {sideMenus.map(({ content, isSelected, onClick }) => (
            <ListItem key={content}>
              <ListItemButton selected={isSelected} onClick={onClick}>
                <ListItemContent>
                  <Typography level='title-sm'>{content}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem nested>
            <Toggler
              defaultExpanded
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <GroupRoundedIcon />
                  <ListItemContent>
                    <Typography level="title-sm">Users</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton selected>My profile</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Create a new user</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Roles & permission</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem> */}
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant='outlined'
          size='sm'
          src='https://avatars.githubusercontent.com/u/132321873?v=4'
        />
        <Link to='https://github.com/mitchell-up' target='_blank'>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level='title-sm'>mitchell</Typography>
            <Typography level='body-xs'>kim3603di@gmail.com</Typography>
          </Box>
        </Link>
      </Box>
    </Sheet>
  )
}
