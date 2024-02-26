import { Box, Stack, Typography } from '@mui/joy'
import { Profiler, ReactNode } from 'react'
import { AnalysisResult } from './ui/AnaysisResult'
import { useAnalysis } from '../hooks/useAnalysis'

interface PageLayoutProps {
  title?: string
  description?: string
  compA: ReactNode
  compB: ReactNode
  compAName: string
  compBName: string
}

export default function PageLayout({
  title,
  description,
  compA,
  compB,
  compAName,
  compBName,
}: PageLayoutProps) {
  const { onRenderA, onRenderB, renderCnt, measure, clear, data, avg } =
    useAnalysis()

  const genKey = (id: string) => `${id}-${renderCnt}`

  return (
    <Stack direction={'row'}>
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
            <Typography level='h2' component='h1' sx={{ mt: 1, mb: 1 }}>
              {title}
            </Typography>
            <Typography level='body-md' component='p' sx={{ mt: 0, mb: 2 }}>
              {description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ px: { xs: 2, md: 6 } }}>
          {renderCnt > 0 && (
            <Stack direction={'row'} gap={4}>
              <Box flex={1}>
                <Typography>{compAName}</Typography>
                <Profiler
                  key={genKey(compAName)}
                  id={compAName}
                  onRender={onRenderA}
                >
                  {compA}
                </Profiler>
              </Box>
              <Box flex={1}>
                <Typography>{compBName}</Typography>
                <Profiler
                  key={genKey(compBName)}
                  id={compBName}
                  onRender={onRenderB}
                >
                  {compB}
                </Profiler>
              </Box>
            </Stack>
          )}
        </Box>
      </Box>

      <Box sx={{ width: '25vw' }}>
        <AnalysisResult
          profileA={compAName}
          profileB={compBName}
          data={data}
          avg={avg}
          onMeasure={measure}
          onClear={clear}
        />
      </Box>
    </Stack>
  )
}
