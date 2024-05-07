import { CircularProgress, Stack, Typography } from '@mui/joy'

export default function AnalysisLoader() {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      gap={1}
      sx={{ height: '100%' }}
    >
      <CircularProgress />
      <Typography level='body-sm'>Click Measure Button</Typography>
    </Stack>
  )
}
