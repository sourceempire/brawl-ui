import { useState } from "react";
import { useDaysInMonth } from "./hooks/useDaysInMonth";
import styles from "./Datepicker.module.css";
import { ChevronLeft, ChevronRight } from "../Icons/Icons";

type Props = {
  defaultDate?: Date;
  onChange: (date: Date) => void;
};

function DatePicker({ defaultDate, onChange }: Props) {
  const [selectedDate, setSelectedDate] = useState(defaultDate ?? new Date());
  const [shownYear, setShownYear] = useState(selectedDate.getFullYear());
  const [shownMonth, setShownMonth] = useState(selectedDate.getMonth());

  const days = useDaysInMonth({ month: shownMonth, year: shownYear });

  function handleMonthChange(amount: number) {
    setShownMonth((prevMonth) => {
      const newMonth = prevMonth + amount;
      if (newMonth > 11) {
        setShownYear((prevYear) => prevYear + 1);
        return 0; // reset to January
      } else if (newMonth < 0) {
        setShownYear((prevYear) => prevYear - 1);
        return 11; // reset to December
      }
      return newMonth;
    });
  }

  function handleChange(date: Date) {
    onChange(date);
    setSelectedDate(date);
  }

  return (
    <div className={styles.datePicker}>
      <div className={styles.monthAndYear}>
        <div
          className={styles.arrowContainer}
          onClick={() => handleMonthChange(-1)}
        >
          <ChevronLeft className={styles.arrow} />
        </div>
        <div>
          {monthNames[shownMonth]} {shownYear}
        </div>
        <div
          className={styles.arrowContainer}
          onClick={() => handleMonthChange(1)}
        >
          <ChevronRight className={styles.arrow} />
        </div>
      </div>

      <div className={styles.dates}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div className={styles.dayName}>{weekDays[index]}</div>
        ))}
      </div>

      <div className={styles.dates}>
        {days.map(({ date, isInMonth }) => (
          <div
            className={getDateClassName(isInMonth, date, selectedDate)}
            key={getDateKey(date)}
            onClick={() => handleChange(date)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatePicker;


const getDateClassName = (
  isInMonth: boolean,
  date: Date,
  selectedDate: Date
) => {
  const isSelected =
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear();

  return (
    `${styles.date} ` +
    `${!isInMonth ? styles.inactive : ""} ` +
    `${isSelected ? styles.selected : ""}`
  );
};

const getDateKey = (date: Date): string => {
  return `${date.getDate()} ${date.getMonth()}`;
};

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const monthNames = [
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