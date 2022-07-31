import React from "react";
import styled from "styled-components";

type ThingProps = {
  children: React.ReactNode;
};

export const Thing = ({ children }: ThingProps) => {
  return <StyledThing>{children}</StyledThing>;
};

const StyledThing = styled.div`
  background: #ff0;
`;
