import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react";
import { Datepicker } from "..";

type DatepickerProps = ComponentProps<typeof Datepicker>;

export default {
  title: "Datepicker",
  component: Datepicker,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const datepicker = (args: DatepickerProps) => {
  return <Datepicker>the snozzberries taste like snozzberries</Datepicker>;
};
datepicker.argTypes = {};
datepicker.args = {};
datepicker.storyName = "Datepicker";
