import React from "react";
import { useLocale, useRangeCalendar } from "react-aria";
import styled from "styled-components";
import { useRangeCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";
import { Box, Text, themeGet } from "@primer/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

import { RangeCalendarGrid } from ".";
// Reuse the Button from your component library. See below for details.
import { CalendarButton } from "..";

export const RangeCalendar = ({ ...props }) => {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  let {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title,
  } = useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <CalendarHeader>
        <Text>{title}</Text>
        <ButtonWrapper>
          <CalendarButton {...prevButtonProps}>
            <ChevronLeftIcon />
          </CalendarButton>
          <CalendarButton {...nextButtonProps}>
            <ChevronRightIcon />
          </CalendarButton>
        </ButtonWrapper>
      </CalendarHeader>
      <RangeCalendarGrid state={state} />
    </div>
  );
};
const Wrapper = styled(Box)`
  background: ${themeGet("colors.canvas.default")};
  color: ${themeGet("colors.fg.default")};
  border: 1px solid;
  border-color: ${themeGet("colors.border.muted")};
  border-radius: ${themeGet("radii.1")};
  width: fit-content;
  padding: 16px;
`;
const CalendarHeader = styled(Box)``;
const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
