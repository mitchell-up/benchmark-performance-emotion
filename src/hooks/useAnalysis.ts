import { ProfilerOnRenderCallback, useEffect, useState } from 'react'

type DataA = number
type DataB = number
export type Data = [DataA, DataB]
export type AnalysisData = Data[]

function calcAverage(total: Data, count: number): Data {
  return [total[0] / count, total[1] / count]
}

export function useAnalysis() {
  const [renderCnt, setRenderCnt] = useState(0)
  const [durationA, setDurationA] = useState<number>()
  const [durationB, setDurationB] = useState<number>()
  const [data, setData] = useState<AnalysisData>([])
  const [total, setTotal] = useState<Data>([0, 0])

  const measure = (trial?: number) => {
    let trialNumber = trial || 1

    setTimeout(() => {
      setRenderCnt((prev) => ++prev)

      // Trigger re-rendering by clearing durations.
      setDurationA(undefined)
      setDurationB(undefined)

      if (trialNumber > 1) {
        measure(--trialNumber)
      }
    }, 0)
  }

  const clear = () => {
    setData([])
    setTotal([0, 0])
    setRenderCnt(0)
  }

  const onRenderA: ProfilerOnRenderCallback = (_, __, ___, value) => {
    if (!durationA) {
      setDurationA(value)
    }
  }

  const onRenderB: ProfilerOnRenderCallback = (_, __, ___, value) => {
    if (!durationB) {
      setDurationB(value)
    }
  }

  useEffect(() => {
    if (durationA != null && durationB != null) {
      setData((prev) => [...prev, [durationA, durationB]])
      setTotal((prev) => [prev[0] + durationA, prev[1] + durationB])
    }
  }, [durationA, durationB])

  return {
    renderCnt,
    onRenderA,
    onRenderB,
    data,
    avg: calcAverage(total, data.length),
    clear,
    measure,
  }
}
