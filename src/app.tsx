import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Background from "./components/background";
import Container from "./components/container";
import ControlLength from "./components/controlLength";
import Controls from "./components/controls";
import Result from "./components/result";

import { useStore } from "./store";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

export default function App() {
  const {
    length,
    digits,
    capitals,
    symbols,
    onlyDigits,

    handleLength,
    handleDigits,
    handleCapitals,
    handleSymbols,
    handleOnlyDigits,

    result,
    refresh,

    copied,
    copy
  } = useStore();

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Background>
          <Container>
            <ControlLength defaultValue={length} handler={handleLength} />
            <Controls
              items={[
                {
                  label: "Digits",
                  value: digits,
                  handle: handleDigits
                },
                {
                  label: "Capitals",
                  value: capitals,
                  handle: handleCapitals
                },
                {
                  label: "Symbols",
                  value: symbols,
                  handle: handleSymbols
                },
                {
                  label: "Only Digits",
                  value: onlyDigits,
                  handle: handleOnlyDigits
                }
              ]}
            />
            <Result
              value={result}
              handleRefresh={refresh}
              copied={copied}
              handleCopy={copy}
            />
          </Container>
        </Background>
      </ThemeProvider>
    </React.StrictMode>
  );
}
