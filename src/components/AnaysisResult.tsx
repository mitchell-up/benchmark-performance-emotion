import { Button, Divider, Sheet, Stack, Table } from "@mui/joy";
import { useState } from "react";
import AnalysisLoader from "./ui/AnalysisLoader";
import AnalysisAppendix from "./ui/AnaysisAppendix";

type Data = [number, number]
type AnaysisData = Data[]

interface AnalysisResultProps {
  profileA: string
  profileB: string
  onMeasure: () => Data
}

type UseAnaysisResult = {
  data: AnaysisData,
  addData: (newVal: Data) => void
  avg: Data | number[]
  clear: () => void
}

const useAnalysis = (): UseAnaysisResult => {
  const [data, setData] = useState<AnaysisData>([])
  const [total, setTotal] = useState<Data>([0, 0])

  return {
    data,
    addData(newVal) {
      setData(prev => [...prev, newVal])
      setTotal(prev => [prev[0] + newVal[0], prev[1] + newVal[1]])
    },
    avg: total.map(val => val / data.length),
    clear() {
      setData([])
      setTotal([0, 0])
    }
  }
}

export default function AnalysisResult({
  profileA,
  profileB,
  onMeasure
}: AnalysisResultProps) {
  const { data, addData, avg, clear } = useAnalysis()

  const onClickMeasure = () => {
    addData(onMeasure())
  }

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
        backgroundColor: 'Background'
      }}
    >
      <AnalysisAppendix/>

      <Stack direction={"row"} justifyContent={"space-between"} gap={0.5}>
        <Button variant="soft" sx={{ flex: 1 }} onClick={clear}>
          Clear
        </Button>
        <Button sx={{ flex: 1 }} onClick={onClickMeasure}>
          Measure
        </Button>
      </Stack>

      <Divider />

      {data.length < 1 ? <AnalysisLoader/> :
        <Table variant="soft">
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
                <td>{index}</td>
                <td>{values[0]}</td>
                <td>{values[1]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Avg.</th>
              <td>{avg[0]}</td>
              <td>{avg[1]}</td>
            </tr>
          </tfoot>
        </Table>
      }
    </Sheet>
  )
}