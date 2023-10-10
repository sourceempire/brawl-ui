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

export function getInitialYear(date: Date | null) {
  return (date ?? new Date()).getFullYear();
}

export function getInitialMonth(date: Date | null) {
  return (date ?? new Date()).getMonth();
}
