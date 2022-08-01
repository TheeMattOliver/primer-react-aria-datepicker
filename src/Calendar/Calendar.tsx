import React from "react";
import styled from "styled-components";

import { useCalendar, useLocale } from "react-aria";
import { useCalendarState } from "react-stately";
import { createCalendar } from "@internationalized/date";

import { Box, Button, Text, themeGet } from "@primer/react";

import { CalendarGrid, CalendarCell } from ".";

/**
 *
 * Calendar is pretty special isn't it?
 */
export const Calendar = ({ ...props }) => {
  let { locale } = useLocale();

  let state = useCalendarState({
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
      <CalendarHeader>
        <Text>{title}</Text>
        <ButtonWrapper>
          <Button {...prevButtonProps} variant={`invisible`}>
            &lt;
          </Button>
          <Button {...nextButtonProps} variant={`invisible`}>
            &gt;
          </Button>
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
  width: fit-content;
  padding: 16px;
`;
const CalendarHeader = styled(Box)``;
const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
