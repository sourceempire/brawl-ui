import { useState } from "react";
import { getInitialMonth, getInitialYear } from "../helpers";

type Options = {
  initialDate: Date | null;
}

export function useMonthNavigation({ initialDate }: Options) {
  const [shownYear, setShownYear] = useState(getInitialYear(initialDate));
  const [shownMonth, setShownMonth] = useState(getInitialMonth(initialDate));

  const handleMonthChange = (amount: number) => {
    setShownMonth((prevMonth) => {
      const newMonth = prevMonth + amount;
      if (newMonth > 11) {
        setShownYear((prevYear) => prevYear + 1);
        return 0;  // reset to January
      } else if (newMonth < 0) {
        setShownYear((prevYear) => prevYear - 1);
        return 11;  // reset to December
      }
      return newMonth;
    });
  };

  const incrementMonth = () => {
    handleMonthChange(1);
  };

  const decrementMonth = () => {
    handleMonthChange(-1);
  };

  return {
    shownYear,
    shownMonth,
    incrementMonth,
    decrementMonth,
  };
}