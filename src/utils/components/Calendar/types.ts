export type NullableDate = Date | null;
export type DateRange = [NullableDate, NullableDate];

export type CalendarProps = {
  selectedDate: NullableDate;
  disableBefore?: NullableDate;
  disableAfter?: NullableDate;
  dateRange?: DateRange;
  includeTime?: boolean;
  onChange: (date: NullableDate) => void;
};

export type DateClassNameOptions = Pick<CalendarProps, "selectedDate" | "disableBefore" | "disableAfter" | "dateRange"> & {
  isInMonth: boolean;
  date: Date;
};

export type BackArrowClassNameOptions = Pick<CalendarProps, "disableBefore"> & {
  shownYear: number;
  shownMonth: number;
};

export type ForwardArrowClassNameOptions = Pick<CalendarProps, "disableAfter"> & {
  disableAfter?: NullableDate;
  shownYear: number;
  shownMonth: number;
};

export const EMPTY_TIME_STRING = "--"
