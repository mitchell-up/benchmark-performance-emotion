import { Box, Divider, Typography } from '@mui/joy'

interface ComparerHeaderProps {
  title?: string
  description?: string
}

export default function ComparerHeader({
  title,
  description,
}: ComparerHeaderProps) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: { sm: -100, md: -110 },
        bgcolor: 'background.body',
        zIndex: 9995,
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Typography level='h2' component='h1' sx={{ mt: 1, mb: 1 }}>
          {title}
        </Typography>
        <Typography level='body-md' component='p' sx={{ mt: 0, mb: 2 }}>
          {description}
        </Typography>
        <Divider sx={{ mb: 2 }} />
      </Box>
    </Box>
  )
}
