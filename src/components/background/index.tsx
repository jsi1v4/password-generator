import React from "react";

import StyledBackground from "./styles";

export interface BackgroundProps {
  children?: React.ReactNode;
}

export default function Background(props: BackgroundProps) {
  return <StyledBackground>{props.children}</StyledBackground>;
}
