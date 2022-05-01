import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

export interface ResultProps {
  value: string;
  copied: boolean;
  handleRefresh: () => void;
  handleCopy: () => void;
}

export default function Result({
  value,
  handleRefresh,
  copied,
  handleCopy
}: ResultProps) {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        variant="filled"
        value={value}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleRefresh}>
                <Icon>refresh</Icon>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Button color={copied ? "success" : "primary"} onClick={handleCopy}>
        Copy
      </Button>
    </Stack>
  );
}
