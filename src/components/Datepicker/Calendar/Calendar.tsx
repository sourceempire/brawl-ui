import { useDaysInMonth } from "./hooks/useDaysInMonth";

import { BackArrowClassNameOptions, DateClassNameOptions, ForwardArrowClassNameOptions, CalendarProps } from "./types";
import {
  getDateKey,
  isDateAfter,
  isDateBefore,
  isMonthAfterOrSame,
  isMonthBeforeOrSame,
  isSameDay,
  monthNames,
  weekDays,
} from "./helpers";
import { useCheckDateRange } from "./hooks/useCheckDateRange";
import { useMonthNavigation } from "./hooks/useMonthNavigaton";
import { ChevronLeft, ChevronRight } from "../../Icons";
import { classNames } from "../../../utils/classNames";

import styles from "./Calendar.module.css";
import { Button } from "../..";

export function Calendar({ selectedDate, disableBefore, disableAfter, onChange }: CalendarProps) {
  useCheckDateRange({ selectedDate, disableAfter, disableBefore, onChange });
  const { incrementMonth, decrementMonth, shownMonth, shownYear } = useMonthNavigation({ initialDate: selectedDate });
  const days = useDaysInMonth({ month: shownMonth, year: shownYear });

  return (
    <div className={styles.calendar}>
      <div className={styles.monthAndYear}>
        <div className={getBackArrowClassName({ shownMonth, shownYear, disableBefore })} onClick={decrementMonth}>
          <ChevronLeft className={styles.arrow} />
        </div>
        <div>
          {monthNames[shownMonth]} {shownYear}
        </div>
        <div className={getForwardArrowClassName({ shownMonth, shownYear, disableAfter })} onClick={incrementMonth}>
          <ChevronRight className={styles.arrow} />
        </div>
      </div>

      <div className={styles.dates}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div className={styles.dayName}>{weekDays[index]}</div>
        ))}
      </div>

      <div className={styles.dates}>
        {days.map(({ date, isInMonth }) => {
          const className = getDateClassName({
            isInMonth,
            date,
            selectedDate,
            disableBefore,
            disableAfter,
          });

          return (
            <div className={className} key={getDateKey(date)} onClick={() => onChange(date)}>
              {date.getDate()}
            </div>
          );
        })}
      </div>
      <Button className={styles.clearButton} onClick={() => onChange(null)}>Clear</Button>
    </div>
  );
}

function getDateClassName({ isInMonth, date, selectedDate, disableBefore, disableAfter }: DateClassNameOptions) {
  const isToday = isSameDay(date, new Date());
  const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;

  const isDisabled =
    (disableBefore ? isDateBefore(date, disableBefore) : false) || (disableAfter ? isDateAfter(date, disableAfter) : false);

  return classNames({
    [styles.date]: true, // Always include styles.date
    [styles.disabled]: isDisabled,
    [styles.hidden]: !isInMonth,
    [styles.today]: isToday,
    [styles.selected]: isSelected,
  });
}

function getBackArrowClassName(options: BackArrowClassNameOptions): string {
  const { disableBefore, shownYear, shownMonth } = options;

  const firstDateOfCurrentMonth = new Date(shownYear, shownMonth, 1);
  const isBackButtonHidden = disableBefore ? isMonthBeforeOrSame(firstDateOfCurrentMonth, disableBefore) : false;

  return classNames({
    [styles.arrowContainer]: true,
    [styles.hidden]: isBackButtonHidden,
  });
}

function getForwardArrowClassName(options: ForwardArrowClassNameOptions): string {
  const { disableAfter, shownYear, shownMonth } = options;

  const lastDateOfCurrentMonth = new Date(shownYear, shownMonth + 1, 0);
  const isForwardButtonHidden = disableAfter ? isMonthAfterOrSame(lastDateOfCurrentMonth, disableAfter) : false;

  return classNames({
    [styles.arrowContainer]: true,
    [styles.hidden]: isForwardButtonHidden,
  });
}
