import { Box, Divider, Stack, Typography } from '@mui/joy'
import { ReactNode } from 'react'
import { AnalysisResult } from './ui/AnaysisResult'
import { useAnalysis } from '../hooks/useAnalysis'
import Comparer from './layouts/Comparer'

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
            <Divider sx={{ mb: 2 }} />
          </Box>
        </Box>

        <Box sx={{ px: { xs: 2, md: 6 } }}>
          {renderCnt > 0 && (
            <Comparer
              compAName={compAName}
              compA={compA}
              onRenderA={onRenderA}
              compBName={compBName}
              compB={compB}
              onRenderB={onRenderB}
              renderCnt={renderCnt}
            />
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
