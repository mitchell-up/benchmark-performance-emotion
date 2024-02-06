
import { Box, Card, Sheet, Typography } from "@mui/joy";
import { PropsWithChildren } from "react";

interface PageLayoutProps extends PropsWithChildren {
  title?: string
}

export default function PageLayout({
  title,
  children
}: PageLayoutProps) {
  return (
    <Box sx={{ flex: 1, width: '100%' }}>
      <Box
        sx={{
          position: 'sticky',
          top: { sm: -100, md: -110 },
          bgcolor: 'background.body',
          zIndex: 9995,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography 
            level="h2" 
            component="h1"
            sx={{ mt: 1, mb: 2 }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 6 } }}>
        {children}
      </Box>

      <Sheet
        sx={{
          position: 'fixed',
          zIndex: 10000,
          height: '100dvh',
          width: '25vw',
          top: 0,
          right: 0,
          p: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderLeft: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'Background'
        }}
      >
        <Card
          invertedColors
          variant="soft"
          color="primary"
          size="sm"
        >
          <Typography level="body-sm">
            컴포넌트의 성능분석은 <b>React.Profiler API</b>의 측정결과를 기준으로 합니다.
          </Typography>
        </Card>
      </Sheet>
    </Box>
  )
}