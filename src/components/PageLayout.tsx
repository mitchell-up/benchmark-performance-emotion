import { Box, Stack } from '@mui/joy'
import { ReactNode } from 'react'
import { AnalysisResult } from './ui/AnaysisResult'
import { useAnalysis } from '../hooks/useAnalysis'
import Comparer from './layouts/Comparer'
import ComparerHeader from './layouts/ComparerHeader'

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
        <ComparerHeader title={title} description={description} />

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
