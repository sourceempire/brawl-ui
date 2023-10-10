import { Calendar, CalendarProps } from "./Calendar";

import styles from "./Datepicker.module.css";

type Props = Omit<CalendarProps, "dateRange">;

function DatePicker({ selectedDate, disableBefore, disableAfter, onChange }: Props) {
  return (
    <div className={styles.datePicker}>
      <Calendar selectedDate={selectedDate} disableBefore={disableBefore} disableAfter={disableAfter} onChange={onChange} />
    </div>
  );
}

export default DatePicker;
