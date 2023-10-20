import { BackArrowClassNameOptions, DateClassNameOptions, DateRange, ForwardArrowClassNameOptions, NullableDate } from "./types";
import styles from './Calendar.module.css';
import { classNames } from "../../functions";

export const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export function isDateBefore(targetDate: Date, referenceDate: Date): boolean {
  const targetDateCopy = new Date(targetDate);
  const referenceDateCopy = new Date(referenceDate);

  targetDateCopy.setHours(0, 0, 0, 0);
  referenceDateCopy.setHours(0, 0, 0, 0);

  return targetDateCopy < referenceDateCopy;
}

export function isDateAfter(targetDate: Date, referenceDate: Date): boolean {
  const targetDateCopy = new Date(targetDate);
  const referenceDateCopy = new Date(referenceDate);

  targetDateCopy.setHours(0, 0, 0, 0);
  referenceDateCopy.setHours(0, 0, 0, 0);

  return targetDateCopy > referenceDateCopy;
}

export function isMonthBeforeOrSame(
  targetDate: Date,
  referenceDate: Date
): boolean {
  return (
    targetDate.getFullYear() < referenceDate.getFullYear() ||
    (targetDate.getFullYear() === referenceDate.getFullYear() &&
      targetDate.getMonth() <= referenceDate.getMonth())
  );
}

export function isMonthAfterOrSame(
  targetDate: Date,
  referenceDate: Date
): boolean {
  return (
    targetDate.getFullYear() > referenceDate.getFullYear() ||
    (targetDate.getFullYear() === referenceDate.getFullYear() &&
      targetDate.getMonth() >= referenceDate.getMonth())
  );
}

export function getDateKey(date: Date): string {
  return `${date.getDate()}-${date.getMonth()}`;
}

export function getInitialYear(date: NullableDate) {
  return (date ?? new Date()).getFullYear();
}

export function getInitialMonth(date: NullableDate) {
  return (date ?? new Date()).getMonth();
}

export function isDateInRange(date: Date, range: DateRange) {
  const startDate = range[0];
  const endDate = range[1];

  if (!startDate || !endDate) return false;

  return !(
    (startDate && isDateBefore(date, startDate)) ||
    (endDate && isDateAfter(date, endDate))
  )
}

export function isFirstDayOfMonth(date: Date): boolean {
  return date.getDate() === 1;
}

export function isLastDayOfMonth(date: Date): boolean {
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const lastDayOfMonth = new Date(nextMonth.getTime() - 86400000);  // subtract one day in milliseconds
  return date.getDate() === lastDayOfMonth.getDate();
}


export function getDateClassName({ isInMonth, date, selectedDate, disableBefore, disableAfter }: DateClassNameOptions) {
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

export function getInRangeClassName({
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

export function getBackArrowClassName(options: BackArrowClassNameOptions): string {
  const { disableBefore, shownYear, shownMonth } = options;

  const firstDateOfCurrentMonth = new Date(shownYear, shownMonth, 1);
  const isBackButtonHidden = disableBefore ? isMonthBeforeOrSame(firstDateOfCurrentMonth, disableBefore) : false;

  return classNames({
    [styles.arrowContainer]: true,
    [styles.hidden]: isBackButtonHidden,
  });
}

export function getForwardArrowClassName(options: ForwardArrowClassNameOptions): string {
  const { disableAfter, shownYear, shownMonth } = options;

  const lastDateOfCurrentMonth = new Date(shownYear, shownMonth + 1, 0);
  const isForwardButtonHidden = disableAfter ? isMonthAfterOrSame(lastDateOfCurrentMonth, disableAfter) : false;

  return classNames({
    [styles.arrowContainer]: true,
    [styles.hidden]: isForwardButtonHidden,
  });
}
