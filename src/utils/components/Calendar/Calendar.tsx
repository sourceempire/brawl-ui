import { useDaysInMonth } from "./hooks/useDaysInMonth";

import { CalendarProps } from "./types";
import {
  getBackArrowClassName,
  getDateClassName,
  getDateKey,
  getForwardArrowClassName,
  getInRangeClassName,
  monthNames,
  weekDays,
} from "./helpers";
import { useCheckDateRange } from "./hooks/useCheckDateRange";
import { useMonthNavigation } from "./hooks/useMonthNavigaton";
import { Icons } from "../../../components/Icons";
import { classNames } from "../../functions/classNames";

import styles from "./Calendar.module.css";
import { TimeInput } from ".";

export function Calendar({ selectedDate, disableBefore, disableAfter, onChange, dateRange, includeTime }: CalendarProps) {
  useCheckDateRange({ selectedDate, disableAfter, disableBefore, onChange, includeTime });
  
  const { incrementMonth, decrementMonth, shownMonth, shownYear } = useMonthNavigation({ initialDate: selectedDate });
  const days = useDaysInMonth({ month: shownMonth, year: shownYear });

  const handleChange = (date: Date) => {
    const updatedDate = new Date(date);

    if (selectedDate) {
      updatedDate.setHours(selectedDate.getHours())
      updatedDate.setMinutes(selectedDate.getMinutes())
    }

    onChange(updatedDate);
  }

  const handleTimeChange = (date: Date) => {
    onChange(date);
  }

  return (
    <div className={styles.calendar}>
      <div>
        <div className={styles.monthAndYear}>
          <div className={getBackArrowClassName({ shownMonth, shownYear, disableBefore })} onClick={decrementMonth}>
            <Icons.ChevronLeft className={classNames({ [styles.arrow]: true, [styles.back]: true })} />
          </div>
          <div>
            {monthNames[shownMonth]} {shownYear}
          </div>
          <div className={getForwardArrowClassName({ shownMonth, shownYear, disableAfter })} onClick={incrementMonth}>
            <Icons.ChevronRight className={classNames({ [styles.arrow]: true, [styles.forward]: true })} />
          </div>
        </div>

        <div className={styles.dates}>
          {Array.from({ length: 7 }).map((_, index) => (
            <div className={styles.dayName} key={index}>
              {weekDays[index]}
            </div>
          ))}
        </div>

        <div className={styles.dates}>
          {days.map(({ date, isInMonth }) => {
            const dateNumberClassName = getDateClassName({
              isInMonth,
              date,
              selectedDate,
              disableBefore,
              disableAfter,
            });

            const inRangeClassName = getInRangeClassName({ date, dateRange, isInMonth, shownMonth, shownYear });

            return (
              <div className={styles.date} key={getDateKey(date)}>
                {dateRange && <div className={inRangeClassName} />}
                <div className={dateNumberClassName} onClick={() => handleChange(date)}>
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {includeTime && <div>
        <div className={styles.dateTimeDivider} />

        <TimeInput date={selectedDate} onChange={(date) => handleTimeChange(date)} />
      </div>}
    </div>
  );
}
