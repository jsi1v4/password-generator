import React from "react";
import Stack from "@mui/material/Stack";

import StyledContainer from "./styles";

export interface ContainerProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <StyledContainer>
      <Stack spacing={1}>{children}</Stack>
    </StyledContainer>
  );
}
