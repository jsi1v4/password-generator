import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export interface ControlsProps {
  items: {
    label: string;
    value: boolean;
    handle: (v: boolean) => void;
  }[];
}

export default function Controls({ items }: ControlsProps) {
  return (
    <FormGroup row>
      {items.map((item, i) => (
        <FormControlLabel
          key={i}
          label={item.label}
          control={
            <Checkbox
              checked={item.value}
              onChange={(e) => item.handle(e.target.checked)}
            />
          }
        />
      ))}
    </FormGroup>
  );
}
