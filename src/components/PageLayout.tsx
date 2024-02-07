
import { Box, Typography } from "@mui/joy";
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
    </Box>
  )
}