import React, { ComponentProps } from "react";
import { Box, themeGet } from "@primer/react";
import styled from "styled-components";

import { useCalendarCell } from "react-aria";
import { useFocusRing } from "@react-aria/focus";

type BoxProps = ComponentProps<typeof Box>;

type DateCellProps = {
  isSelected: boolean;
};

export const CalendarCell = ({ state, date }) => {
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
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <Box as="td" {...cellProps}>
      <DateCell
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        isSelected={isSelected}
        className={`cell ${isSelected ? "selected" : ""} ${
          isDisabled ? "disabled" : ""
        } ${isUnavailable ? "unavailable" : ""}`}
      >
        {formattedDate}
      </DateCell>
    </Box>
  );
};

const DateCell = styled(Box)<BoxProps & DateCellProps>`
  background: ${(p) =>
    p.isSelected
      ? themeGet("colors.btn.activeBg")
      : themeGet("colors.canvas.default")};

  &:hover {
    cursor: pointer;
  }
`;
