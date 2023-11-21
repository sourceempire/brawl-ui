type Props = {
    selectedDate: Date | null;
    disableBefore?: Date;
    disableAfter?: Date;
    onChange: (date: Date | null) => void;
    includeTime?: boolean;
};
export declare function DatePicker({ selectedDate, disableBefore, disableAfter, onChange, includeTime }: Props): import("react/jsx-runtime").JSX.Element;
export {};
