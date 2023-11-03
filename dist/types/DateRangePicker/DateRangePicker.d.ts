type Props = {
    date1: Date | null;
    date2: Date | null;
    disableBefore?: Date;
    disableAfter?: Date;
    includeTime?: boolean;
    onDate1Change: (date: Date | null) => void;
    onDate2Change: (date: Date | null) => void;
};
export declare function DateRangePicker({ date1, date2, disableBefore, disableAfter, onDate1Change, onDate2Change, includeTime }: Props): import("react/jsx-runtime").JSX.Element;
export {};
