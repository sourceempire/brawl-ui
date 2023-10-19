import { useDaysInMonth } from "./hooks/useDaysInMonth";

import { BackArrowClassNameOptions, DateClassNameOptions, ForwardArrowClassNameOptions, CalendarProps, DateRange } from "./types";
import {
  getDateKey,
  isDateAfter,
  isDateBefore,
  isDateInRange,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isMonthAfterOrSame,
  isMonthBeforeOrSame,
  isSameDay,
  monthNames,
  weekDays,
} from "./helpers";
import { useCheckDateRange } from "./hooks/useCheckDateRange";
import { useMonthNavigation } from "./hooks/useMonthNavigaton";
import { Icons } from "../../../components/Icons";
import { classNames } from "../../functions/classNames";

import styles from "./Calendar.module.css";

export function Calendar({ selectedDate, disableBefore, disableAfter, onChange, dateRange }: CalendarProps) {
  useCheckDateRange({ selectedDate, disableAfter, disableBefore, onChange });
  const { incrementMonth, decrementMonth, shownMonth, shownYear } = useMonthNavigation({ initialDate: selectedDate });
  const days = useDaysInMonth({ month: shownMonth, year: shownYear });

  return (
    <div className={styles.calendar}>
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
              <div className={dateNumberClassName} onClick={() => onChange(date)}>
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getDateClassName({ isInMonth, date, selectedDate, disableBefore, disableAfter }: DateClassNameOptions) {
  const isToday = isSameDay(date, new Date());
  const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;

  const isDisabled =
    (disableBefore ? isDateBefore(date, disableBefore) : false) || (disableAfter ? isDateAfter(date, disableAfter) : false);

  return classNames({
    [styles.dateNumber]: true,
    [styles.disabled]: isDisabled,
    [styles.hidden]: !isInMonth,
    [styles.today]: isToday,
    [styles.selected]: isSelected,
  });
}

function getInRangeClassName({
  date,
  dateRange,
  isInMonth,
  shownMonth,
  shownYear,
}: {
  date: Date;
  dateRange?: DateRange;
  isInMonth: boolean;
  shownMonth: number;
  shownYear: number;
}) {
  const startDate = dateRange?.[0];
  const endDate = dateRange?.[1];
  const isInRange = dateRange ? isDateInRange(date, dateRange) : false;
  const isStartDate = startDate ? isSameDay(date, startDate) : false;
  const isEndDate = endDate ? isSameDay(date, endDate) : false;

  const isNotInMonthAndNotLastDayOfPrevMonth = !isInMonth && !isLastDayOfMonth(date);
  const isNotInMonthAndNotFirstDayOfNextMonth = !isInMonth && !isFirstDayOfMonth(date);

  const isEndDateLastDayOfPreviousMonth = endDate
    ? (endDate.getMonth() === 11 && shownMonth === 0 && endDate.getFullYear() === shownYear - 1 && isLastDayOfMonth(endDate)) ||
      (endDate.getMonth() === shownMonth - 1 && endDate.getFullYear() === shownYear && isLastDayOfMonth(endDate))
    : false;

  const isStartDateFirstDayOfNextMonth = startDate
    ? (startDate.getMonth() === 0 &&
        shownMonth === 11 &&
        startDate.getFullYear() === shownYear + 1 &&
        isFirstDayOfMonth(startDate)) ||
      (startDate.getMonth() === shownMonth + 1 && startDate.getFullYear() === shownYear && isFirstDayOfMonth(startDate))
    : false;

  return classNames({
    [styles.inRange]: isInRange,
    [styles.startDate]: isStartDate,
    [styles.endDate]: isEndDate,
    [styles.hidden]:
      (isNotInMonthAndNotLastDayOfPrevMonth && isNotInMonthAndNotFirstDayOfNextMonth) ||
      isEndDateLastDayOfPreviousMonth ||
      isStartDateFirstDayOfNextMonth,
    [styles.lastDayOfPreviousMonth]: shownMonth !== date.getMonth() && isLastDayOfMonth(date),
    [styles.firstDayOfNextMonth]: shownMonth !== date.getMonth() && isFirstDayOfMonth(date),

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
