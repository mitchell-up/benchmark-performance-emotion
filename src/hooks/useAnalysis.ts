import { ProfilerOnRenderCallback, useEffect, useState } from 'react'

type Data = [number, number]
type AnaysisData = Data[]

export function useAnalysis() {
  const [renderCnt, setRenderCnt] = useState(0)
  const [durationA, setDurationA] = useState<number>()
  const [durationB, setDurationB] = useState<number>()
  const [data, setData] = useState<AnaysisData>([])
  const [total, setTotal] = useState<Data>([0, 0])

  const measure = () => {
    setRenderCnt((prev) => ++prev)

    // Trigger re-rendering by clearing durations.
    setDurationA(undefined)
    setDurationB(undefined)
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
    avg: total.map((val) => val / data.length) as Data,
    clear,
    measure,
  }
}
