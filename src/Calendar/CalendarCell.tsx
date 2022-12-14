import React, { ComponentProps } from "react";
import { Box, themeGet } from "@primer/react";
import styled from "styled-components";

import { useCalendarCell } from "react-aria";
import { useFocusRing } from "@react-aria/focus";

type BoxProps = ComponentProps<typeof Box>;

type DateCellProps = {
  isSelected: boolean;
};

type CalendarCellProps = {
  state: any;
  date: any;
};

export const CalendarCell = ({ state, date }: CalendarCellProps) => {
  let ref = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <GridCell as="td" {...cellProps}>
      <DateCellBtn
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        isSelected={isSelected}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </DateCellBtn>
    </GridCell>
  );
};

const GridCell = styled(Box)`
  padding: ${themeGet("space.1")};
  text-align: center;
`;

const DateCellBtn = styled(Box)<BoxProps & DateCellProps>`
  padding: ${themeGet("space.2")};
  border-radius: ${themeGet("radii.1")};
  background: ${(p) =>
    p.isSelected
      ? themeGet("colors.btn.selectedBg")
      : themeGet("colors.canvas.default")};
  color: ${(p) =>
    p.isSelected
      ? themeGet("colors.btn.text")
      : themeGet("colors.btn.fg.onEmphasis")};

  &:hover {
    cursor: pointer;
    background: ${(p) =>
      p.isSelected
        ? themeGet("colors.btn.activeBg")
        : themeGet("colors.btn.hoverBg")};
    color: ${(p) =>
      p.isSelected
        ? themeGet("colors.btn.text")
        : themeGet("colors.fg.default")};
  }
  &:active {
    cursor: pointer;
    background: ${themeGet("colors.btn.activeBg")};
    color: ${(p) =>
      p.isSelected
        ? themeGet("colors.btn.fg.onEmphasis")
        : themeGet("colors.fg.default")};
  }
  .unavailable {
  }
  .disabled {
    color: ${themeGet("colors.btn.primary.disabledText")};
  }
`;
