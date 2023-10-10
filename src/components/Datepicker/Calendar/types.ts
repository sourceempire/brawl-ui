export type Props = {
  selectedDate: Date | null;
  disableBefore?: Date;
  disableAfter?: Date;
  dateRange?: [Date, Date];
  onChange: (date: Date | null) => void;
};

export type DateClassNameOptions = Pick<Props, 'selectedDate' | 'disableBefore' | 'disableAfter'> & {
  isInMonth: boolean;
  date: Date;
};

export type BackArrowClassNameOptions = Pick<Props, 'disableBefore'> & {
  shownYear: number;
  shownMonth: number;
};

export type ForwardArrowClassNameOptions = Pick<Props, 'disableAfter'> & {
  disableAfter?: Date;
  shownYear: number;
  shownMonth: number;
};
