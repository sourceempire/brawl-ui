import { Calendar } from "../../utils/components";
import { classNames } from "../../utils/functions";
import styles from "./DateRangePicker.module.css";

type Props = {
  date1: Date | null;
  date2: Date | null;
  onDate1Change: (date: Date | null) => void;
  onDate2Change: (date: Date | null) => void;
};

export function DateRangePicker({ date1, date2, onDate1Change, onDate2Change }: Props) {
  return (
    <div className={classNames({ [styles.dateRangePicker]: true })}>
      <Calendar selectedDate={date1} onChange={onDate1Change} disableAfter={date2} dateRange={[date1, date2]} />
      <div className={styles.virticalRule} />
      <Calendar selectedDate={date2} onChange={onDate2Change} disableBefore={date1} dateRange={[date1, date2]} />
    </div>
  );
}
