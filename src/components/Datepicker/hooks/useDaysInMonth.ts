type Options = {
  month: number;
  year: number;
};

type DayInfo = {
  isInMonth: boolean;
  date: Date;
};

type DaysOfMonth = DayInfo[];

export function useDaysInMonth({ month, year }: Options): DaysOfMonth {
  const result: DaysOfMonth = [];

  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0);

  // Find the previous Monday to start the week
  const startPadDate = new Date(firstDate);
  startPadDate.setDate(startPadDate.getDate() - ((startPadDate.getDay() + 6) % 7));

  let endPadDate;
  if (lastDate.getDay() === 0) {
    // If the last date of the month is a Sunday, use it as the end padding date
    endPadDate = new Date(lastDate);
  } else {
    // Otherwise, find the following Sunday to end the week
    endPadDate = new Date(lastDate);
    endPadDate.setDate(endPadDate.getDate() + (7 - endPadDate.getDay()));
  }

  for (let date = new Date(startPadDate); date <= endPadDate; date.setDate(date.getDate() + 1)) {
    result.push({
      isInMonth: date >= firstDate && date <= lastDate,
      date: new Date(date)
    });
  }

  return result;
}
