import { DateRange, NullableDate } from "./types";

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