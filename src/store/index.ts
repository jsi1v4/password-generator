import React from "react";

export function useStore() {
  const [length, setLength] = React.useState<number>(15);
  const [digits, setDigits] = React.useState<boolean>(true);
  const [capitals, setCapitals] = React.useState<boolean>(true);
  const [symbols, setSymbols] = React.useState<boolean>(true);
  const [onlyDigits, setOnlyDigits] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<string>("");
  const [copied, setCopied] = React.useState<boolean>(false);

  function handleLength(v: number) {
    setLength(v);
  }

  function handleDigits(v: boolean) {
    setDigits(v);
    setOnlyDigits(false);
  }

  function handleCapitals(v: boolean) {
    setCapitals(v);
    setOnlyDigits(false);
  }

  function handleSymbols(v: boolean) {
    setSymbols(v);
    setOnlyDigits(false);
  }

  function handleOnlyDigits(v: boolean) {
    setOnlyDigits(true);
    setDigits(false);
    setCapitals(false);
    setSymbols(false);
  }

  function generatePassword() {
    const alphas = "abcdefghijklmnopqrstuvwxyz",
      uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers = "0123456789",
      specials = "!@#$%^&*?+-";

    let charset = alphas,
      passwd = "";

    if (digits) {
      charset += numbers;
    }
    if (capitals) {
      charset += uppers;
    }
    if (symbols) {
      charset += specials;
    }
    if (onlyDigits) {
      charset = numbers;
    }

    for (var i = 0, n = charset.length; i < length; ++i) {
      passwd += charset.charAt(Math.floor(Math.random() * n));
    }

    setResult(passwd);
  }

  function refresh() {
    generatePassword();
  }

  function copy() {
    setCopied(true);
    navigator.clipboard.writeText(result);
  }

  React.useEffect(() => {
    refresh();
  }, [length, digits, capitals, symbols, onlyDigits]);

  return {
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
    copied,

    refresh,
    copy
  };
}
