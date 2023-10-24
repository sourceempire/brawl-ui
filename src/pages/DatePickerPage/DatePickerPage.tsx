import { useState } from "react";
import { DatePicker } from "../../components";
import styles from "./DatePickerPage.module.css";

export function DatePickerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [disableAfter, setDisableAfter] = useState<Date>();
  const [disableBefore, setDisableBefore] = useState<Date>();
  const [includeTime, setIncludeTime] = useState(false);

  const onDisableBeforeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableBefore(new Date(e.target.value));
  };

  const onDisableAfterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableAfter(new Date(e.target.value));
  };

  const onIncludeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncludeTime(e.target.checked);
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
          includeTime={includeTime}
        />
        <div className={styles.testSection}>
          <div>
            <p className={styles.header}>Date2:</p>
            <div>
              <p>{selectedDate ? `${selectedDate.toDateString()} - ${selectedDate?.toLocaleTimeString()}` : "-"}</p>
              ---
              <p>{selectedDate ? selectedDate.toISOString() : "-"}</p>
            </div>
          </div>

          <div>
            <p className={styles.header}>Disable Before</p>
            <input type="date" onChange={onDisableBeforeChange} />
          </div>

          <div>
            <p className={styles.header}>Disable After</p>
            <input type="date" onChange={onDisableAfterChange} />
          </div>

          <div>
            <p className={styles.header}>Time</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input type="checkbox" onChange={onIncludeTimeChange} style={{ margin: 0 }} />
              <label>Include time</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
