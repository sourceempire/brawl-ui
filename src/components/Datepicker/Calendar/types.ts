export type CalendarProps = {
    selectedDate: Date | null;
    disableBefore?: Date;
    disableAfter?: Date;
    dateRange?: [Date, Date];
    onChange: (date: Date | null) => void;
};

export type DateClassNameOptions = Pick<CalendarProps, 'selectedDate' | 'disableBefore' | 'disableAfter'> & {
    isInMonth: boolean;
    date: Date;
};

export type BackArrowClassNameOptions = Pick<CalendarProps, 'disableBefore'> & {
    shownYear: number;
    shownMonth: number;
};

export type ForwardArrowClassNameOptions = Pick<CalendarProps, 'disableAfter'> & {
    disableAfter?: Date;
    shownYear: number;
    shownMonth: number;
};