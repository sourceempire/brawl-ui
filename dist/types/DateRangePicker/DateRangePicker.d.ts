type Props = {
    date1: Date | null;
    date2: Date | null;
    onDate1Change: (date: Date | null) => void;
    onDate2Change: (date: Date | null) => void;
};
export declare function DateRangePicker({ date1, date2, onDate1Change, onDate2Change }: Props): import("react/jsx-runtime").JSX.Element;
export {};
