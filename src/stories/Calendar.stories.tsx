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
  let [date, setDate] = React.useState(parseDate("2022-08-03"));
  let formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <>
      <Calendar value={date} onChange={setDate} {...args} />
      <p>Selected date: {formatter.format(date.toDate(getLocalTimeZone()))}</p>
    </>
  );
};
calendar.argTypes = {};
calendar.args = {};
calendar.storyName = "Calendar";
