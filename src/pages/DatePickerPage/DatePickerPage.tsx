import { useState } from "react";
import { DatePicker } from "../../components";
import styles from "./DatePickerPage.module.css";

export function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [disableAfter, setDisableAfter] = useState<Date>();
  const [disableBefore, setDisableBefore] = useState<Date>();

  const onDisableBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableBefore(new Date(e.target.value));
  };

  const onDisableAfterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableAfter(new Date(e.target.value));
  };

  return (
    <div>
      <h3 className="component-name">DatePicker</h3>
      <div style={{ display: "flex", gap: 40 }}>
        <DatePicker
          onChange={setSelectedDate}
          selectedDate={selectedDate}
          disableBefore={disableBefore}
          disableAfter={disableAfter}
        />
        <div className={styles.testSection}>
          <div>
            <p className={styles.header}>Selected date:</p>
            <p>{selectedDate?.toDateString()}</p>
            <p>{selectedDate?.getHours()}</p>
          </div>

          <div>
            <p className={styles.header}>Disable Before</p>
            <input type="date" onChange={onDisableBeforeChange} />
          </div>

          <div>
            <p className={styles.header}>Disable After</p>
            <input type="date" onChange={onDisableAfterChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
