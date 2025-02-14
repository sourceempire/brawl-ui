import { Calendar } from "../../utils/components/Calendar";
import styles from "./Datepicker.module.css";

type Props = {
  selectedDate: Date | null;
  disableBefore?: Date;
  disableAfter?: Date;
  onChange: (date: Date | null) => void;
  includeTime?: boolean;
};

export function DatePicker({ selectedDate, disableBefore, disableAfter, onChange, includeTime }: Props) {
  return (
    <div className={styles.datePicker}>
      <Calendar
        selectedDate={selectedDate}
        disableBefore={disableBefore}
        disableAfter={disableAfter}
        onChange={onChange}
        includeTime={includeTime}
      />
    </div>
  );
}
