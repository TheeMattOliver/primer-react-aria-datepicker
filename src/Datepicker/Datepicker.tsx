import React from "react";
import styled from "styled-components";

import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";

import { Box, Button, themeGet } from "@primer/react";

import { CalendarGrid, CalendarCell } from ".";

type DatepickerProps = {
  children: React.ReactNode;
};

export const Datepicker = ({ children, ...props }: DatepickerProps) => {
  let { locale } = useLocale();

  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = React.useRef();
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
    ref
  );

  return (
    <Wrapper {...calendarProps} ref={ref} className="calendar">
      <Box className="header">
        <h2>{title}</h2>
        <Button {...prevButtonProps}>&lt;</Button>
        <Button {...nextButtonProps}>&gt;</Button>
      </Box>
      <CalendarGrid state={state} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  background: ${themeGet("colors.canvas.default")};
  color: ${themeGet("colors.fg.default")};
  border: 1px solid;
  border-color: ${themeGet("colors.border.muted")};
`;
