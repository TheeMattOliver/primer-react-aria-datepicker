import React from "react";
import styled from "styled-components";

type DatepickerProps = {
  children: React.ReactNode;
};

export const Datepicker = ({ children }: DatepickerProps) => {
  return <StyledThing>{children}</StyledThing>;
};

const StyledThing = styled.div`
  background: black;
  color: white;
`;
