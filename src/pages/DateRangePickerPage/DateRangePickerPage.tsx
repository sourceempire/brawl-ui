import { useState } from "react";
import { DateRangePicker } from "../../components/DateRangePicker";
import styles from "../DatePickerPage/DatePickerPage.module.css";

export function DateRangePickerPage() {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

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
      <h3 className="component-name">DateRangePicker</h3>
      <div style={{ display: "flex", gap: 40 }}>
        <DateRangePicker
          date1={date1}
          date2={date2}
          disableAfter={disableAfter}
          disableBefore={disableBefore}
          onDate1Change={setDate1}
          onDate2Change={setDate2}
          includeTime={includeTime}
        />

        <div className={styles.testSection}>
          <div>
            <div>
              <p className={styles.header}>Date1:</p>

              <div>
                <p>{date1 ? `${date1.toDateString()} - ${date1?.toLocaleTimeString()}` : "-"}</p>
                ---
                <p>{date1 ? date1.toISOString() : "-"}</p>
              </div>
            </div>
          </div>

          <div>
            <p className={styles.header}>Date2:</p>
            <div>
                <p>{date2 ? `${date2.toDateString()} - ${date2?.toLocaleTimeString()}` : "-"}</p>
                ---
                <p>{date2 ? date2.toISOString() : "-"}</p>
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
