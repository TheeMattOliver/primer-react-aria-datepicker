import React, { ComponentProps } from "react";
import { Box, themeGet } from "@primer/react";
import styled from "styled-components";
import { useCalendarCell } from "react-aria";

interface CalendarCellProps {
  state: any;
  date: any;
}

export const CalendarCell = ({ state, date }: CalendarCellProps) => {
  let ref = React.useRef();
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </div>
    </td>
  );
};
