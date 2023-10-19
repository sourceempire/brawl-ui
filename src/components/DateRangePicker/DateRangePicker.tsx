import { useState } from "react";
import { Calendar } from "../../utils/components";
import { classNames } from "../../utils/functions";
import styles from "./DateRangePicker.module.css";

export function DateRangePicker() {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

  return (
    <div className={classNames({ [styles.dateRangePicker]: true })}>
      <Calendar selectedDate={date1} onChange={setDate1} disableAfter={date2} dateRange={[date1, date2]}/>
      <div className={styles.virticalRule} />
      <Calendar selectedDate={date2} onChange={setDate2} disableBefore={date1} dateRange={[date1, date2]}/>
    </div>
  );
}
