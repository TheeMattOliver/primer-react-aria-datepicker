import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";

import { useDateFormatter } from "react-aria";
import { getLocalTimeZone } from "@internationalized/date";
import { parseDate } from "@internationalized/date";

import { Calendar } from "..";

type CalendarProps = ComponentProps<typeof Calendar>;

export default {
  title: "Calendar",
  component: Calendar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const calendar = (args: CalendarProps) => {
  let [value, setValue] = React.useState(parseDate("2020-07-31"));

  return (
    <>
      <Calendar value={value} onChange={setValue} />
    </>
  );
};
calendar.argTypes = {};
calendar.args = {};
calendar.storyName = "Calendar";
