import { useCalendarGrid, useLocale } from "react-aria";
import { getWeeksInMonth } from "@internationalized/date";

import { Box, themeGet } from "@primer/react";

import { CalendarCell } from ".";
import { Key } from "react";

type CalendarGridProps = {
  state: any;
};

export const CalendarGrid = ({ state, ...props }: CalendarGridProps) => {
  let { locale } = useLocale();
  let { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <Box as="table" {...gridProps}>
      <Box as="thead" {...headerProps}>
        <Box as="tr">
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </Box>
      </Box>
      <Box as="tbody">
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <Box as="tr" key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date: any, i: Key | null | undefined) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <Box as="td" key={i} />
                )
              )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
