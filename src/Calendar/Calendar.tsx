//@ts-nocheck
import React from "react";
import styled from "styled-components";

import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar, parseDate } from "@internationalized/date";

import { Box, Text, themeGet } from "@primer/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@primer/octicons-react";

import { CalendarGrid, CalendarCell, CalendarButton } from ".";

/**
 * This calendar is pretty special
 */
export const Calendar = ({ ...props }) => {
  let { locale } = useLocale();

  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
    ref
  );

  return (
    <Wrapper {...calendarProps} ref={ref} className="calendar">
      <CalendarHeader>
        <Text>{title}</Text>
        <ButtonWrapper>
          <CalendarButton {...prevButtonProps} variant={`invisible`}>
            <ChevronLeftIcon />
          </CalendarButton>
          <CalendarButton {...nextButtonProps} variant={`invisible`}>
            <ChevronRightIcon />
          </CalendarButton>
        </ButtonWrapper>
      </CalendarHeader>
      <CalendarGrid state={state} />
    </Wrapper>
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
