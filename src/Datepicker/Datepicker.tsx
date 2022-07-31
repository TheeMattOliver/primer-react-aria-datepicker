import React from "react";
import styled from "styled-components";
import { Box, themeGet } from "@primer/react";

type DatepickerProps = {
  children: React.ReactNode;
};

export const Datepicker = ({ children }: DatepickerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled(Box)`
  background: ${themeGet("colors.canvas.default")};
  color: ${themeGet("colors.fg.default")};
`;
