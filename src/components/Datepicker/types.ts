export type Props = {
  selectedDate: Date | null;
  disableBefore?: Date;
  disableAfter?: Date;
  dateRange?: [Date, Date];
  onChange: (date: Date | null) => void;
};

export type DateClassNameOptions = {
  isInMonth: boolean;
  date: Date;
  selectedDate: Date | null;
  disableBefore?: Date;
  disableAfter?: Date;
};

export type BackArrowClassNameOptions = {
  disableBefore?: Date;
  shownYear: number;
  shownMonth: number;
};

export type ForwardArrowClassNameOptions = {
  disableAfter?: Date;
  shownYear: number;
  shownMonth: number;
};
