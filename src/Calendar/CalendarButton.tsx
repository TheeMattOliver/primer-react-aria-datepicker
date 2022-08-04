import React from "react";
import { Button as PrimerButton } from "@primer/react";
import { useButton } from "react-aria";

type ButtonProps = {
  children: React.ReactNode;
};

export const CalendarButton = ({ children, ...props }: ButtonProps) => {
  let ref = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  let { buttonProps } = useButton(props, ref);
  return (
    <PrimerButton {...buttonProps} ref={ref} variant={`invisible`}>
      {children}
    </PrimerButton>
  );
};
