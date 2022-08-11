import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";

import { useDateFormatter } from "react-aria";
import { getLocalTimeZone } from "@internationalized/date";
import { parseDate } from "@internationalized/date";

import { RangeCalendar } from "..";

type RangeCalendarProps = ComponentProps<typeof RangeCalendar>;

export default {
  title: "RangeCalendar",
  component: RangeCalendar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const rangeCalendar = (args: RangeCalendarProps) => {
  let [value, setValue] = React.useState({
    start: parseDate("2022-08-03"),
    end: parseDate("2022-08-12"),
  });

  return (
    <>
      <RangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue}
        {...args}
      />
    </>
  );
};
rangeCalendar.argTypes = {};
rangeCalendar.args = {};
rangeCalendar.storyName = "Range Calendar";
