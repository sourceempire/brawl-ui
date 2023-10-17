type Props = {
    selectedDate: Date | null;
    disableBefore?: Date;
    disableAfter?: Date;
    onChange: (date: Date | null) => void;
};
export declare function DatePicker({ selectedDate, disableBefore, disableAfter, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
