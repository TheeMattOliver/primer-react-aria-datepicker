import React from "react";
import { useCalendarCell } from "react-aria";
import { Box, BoxProps, themeGet } from "@primer/react";
import styled from "styled-components";

type RangeDateCellProps = {
  isSelected?: boolean;
};

type RangeCalendarCellProps = {
  state: any;
  date: any;
};

export const RangeCalendarCell = ({ state, date }: RangeCalendarCellProps) => {
  let ref = React.useRef<HTMLDivElement>(null);

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
    <RangeGridCell as="td" {...cellProps}>
      <RangeDateCellBtn
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </RangeDateCellBtn>
    </RangeGridCell>
  );
};

const RangeGridCell = styled(Box)`
  padding: ${themeGet("space.1")};
  text-align: center;
`;
const RangeDateCellBtn = styled(Box)<BoxProps & RangeDateCellProps>`
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
