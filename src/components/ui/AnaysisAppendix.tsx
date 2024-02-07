import { Card, Stack, Typography } from "@mui/joy";
import { Link } from "@tanstack/react-router";

export default function AnalysisAppendix() {
  return (
    <Link to="https://react.dev/reference/react/Profiler" target="_blank">
      <Card
        invertedColors
        variant="soft"
        color="neutral"
        size="sm"
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography level="body-xs">
            Tool
          </Typography>
          <Typography level="body-xs">
            <b>React.Profiler API</b>
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography level="body-xs">
            Criteria
          </Typography>
          <Typography level="body-xs">
            <b>baseDuration</b>
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography level="body-xs">
            Unit
          </Typography>
          <Typography level="body-xs">
            <b>ms</b>
          </Typography>
        </Stack>
      </Card>
    </Link>
  )
}