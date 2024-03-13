import { Box, Chip, Stack } from '@mui/joy'
import { Profiler, ProfilerOnRenderCallback, ReactNode } from 'react'

interface ComparerProps {
  compAName: string
  compA: ReactNode
  onRenderA: ProfilerOnRenderCallback
  compBName: string
  compB: ReactNode
  onRenderB: ProfilerOnRenderCallback
  renderCnt?: number
}

export default function Comparer({
  compAName,
  compA,
  onRenderA,
  compBName,
  compB,
  onRenderB,
  renderCnt,
}: ComparerProps) {
  const genKey = (id: string) => `${id}-${renderCnt}`

  return (
    <Stack direction={'row'} gap={4}>
      {/* Component A */}
      <Box flex={1}>
        <Box sx={{ mb: 1 }}>
          <Chip color='danger' size='lg' variant='soft'>
            {compAName}
          </Chip>
        </Box>
        <Profiler key={genKey(compAName)} id={compAName} onRender={onRenderA}>
          {compA}
        </Profiler>
      </Box>

      {/* Component B */}
      <Box flex={1}>
        <Box sx={{ mb: 1 }}>
          <Chip color='success' size='lg' variant='soft'>
            {compBName}
          </Chip>
        </Box>
        <Profiler key={genKey(compBName)} id={compBName} onRender={onRenderB}>
          {compB}
        </Profiler>
      </Box>
    </Stack>
  )
}
