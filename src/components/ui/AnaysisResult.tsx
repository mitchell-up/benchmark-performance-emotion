import { Box, Button, Divider, Sheet, Stack, Table } from '@mui/joy'
import AnalysisLoader from './AnalysisLoader'
import AnalysisAppendix from './AnaysisAppendix'
import { AnalysisData, Data } from '../../hooks/useAnalysis'

export interface AnalysisResultProps {
  profileA: string
  profileB: string
  data: AnalysisData
  avg: Data
  onMeasure: () => void
  onClear: () => void
}

export function AnalysisResult({
  profileA,
  profileB,
  data,
  avg,
  onMeasure,
  onClear,
}: AnalysisResultProps) {
  return (
    <Sheet
      sx={{
        position: 'fixed',
        zIndex: 10000,
        height: '100dvh',
        width: '25vw',
        minWidth: 300,
        top: 0,
        right: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderLeft: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'Background',
      }}
    >
      <AnalysisAppendix />

      <Stack direction={'row'} justifyContent={'space-between'} gap={0.5}>
        <Button variant='soft' sx={{ flex: 1 }} onClick={onClear}>
          Clear
        </Button>
        <Button sx={{ flex: 1 }} onClick={onMeasure}>
          Measure
        </Button>
      </Stack>

      <Divider />

      <Box
        sx={{
          overflow: 'hidden auto',
          flexGrow: 1,
        }}
      >
        {data.length < 1 ? (
          <AnalysisLoader />
        ) : (
          <Table variant='soft'>
            <thead>
              <tr>
                <th>Attempt</th>
                <th>{profileA}</th>
                <th>{profileB}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((values, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{values[0].toFixed(2)}</td>
                  <td>{values[1].toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope='row'>Avg.</th>
                <td>{avg[0].toFixed(2)}</td>
                <td>{avg[1].toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
        )}
      </Box>
    </Sheet>
  )
}
