import { useState } from "react";
import { DatePicker } from "../../components";
import styles from './DatePickerPage.module.css';

export function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <>
      <h3 className="component-name">DatePicker</h3>

      <p className={styles.selectedDate}>Selected date: {selectedDate?.toDateString()}</p>

      <DatePicker onChange={setSelectedDate} />
    </>
  );
}
