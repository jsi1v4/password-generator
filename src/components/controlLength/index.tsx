import React from "react";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

export interface ControlLengthProps {
  defaultValue: number;
  handler: (v: number) => void;
}

export default function ControlLength({
  defaultValue,
  handler
}: ControlLengthProps) {
  const [length, setLength] = React.useState(defaultValue);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setLength(value);
    handler(value);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography variant="subtitle1">Length</Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider value={length} onChange={handleChange} min={6} max={20} />
      </Grid>
      <Grid item xs={2} textAlign="end">
        <Typography variant="subtitle2">{length}</Typography>
      </Grid>
    </Grid>
  );
}
