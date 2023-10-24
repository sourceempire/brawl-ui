import { Calendar } from "../../utils/components";
import { classNames } from "../../utils/functions";
import styles from "./DateRangePicker.module.css";

type Props = {
  date1: Date | null;
  date2: Date | null;
  disableBefore?: Date;
  disableAfter?: Date;
  includeTime?: boolean;
  onDate1Change: (date: Date | null) => void;
  onDate2Change: (date: Date | null) => void;
};

export function DateRangePicker({ date1, date2, disableBefore, disableAfter, onDate1Change, onDate2Change, includeTime}: Props) {
  const disableBeforeValid = disableBefore && (!date1 || (date1 && disableBefore < date1));
  const disableAfterValid = disableAfter && (!date2 || (date2 && disableAfter > date2));

  return (
    <div className={classNames({ [styles.dateRangePicker]: true })}>
      <Calendar
        selectedDate={date1}
        onChange={onDate1Change}
        disableAfter={date2 || (disableAfterValid ? disableAfter : undefined)}
        disableBefore={disableBeforeValid ? disableBefore : undefined}
        dateRange={[date1, date2]}
        includeTime={includeTime}
      />
      <div className={styles.verticalRule} />
      <Calendar
        selectedDate={date2}
        onChange={onDate2Change}
        disableAfter={disableAfterValid ? disableAfter : undefined}
        disableBefore={date1 || (disableBeforeValid ? disableBefore : undefined)}
        dateRange={[date1, date2]}
        includeTime={includeTime}
      />
    </div>
  );
}