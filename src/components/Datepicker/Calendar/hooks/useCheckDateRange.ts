import { useEffect, useRef } from "react";
import { CalendarProps } from "..";

type Options = Pick<CalendarProps, 'selectedDate' | 'disableBefore' | 'disableAfter' | 'onChange'>

export function useCheckDateRange({ selectedDate, disableBefore, disableAfter, onChange }: Options) {
  const onChangeRef = useRef(onChange);
  const selectedDateRef = useRef(selectedDate);

  useEffect(() => {
    onChangeRef.current = onChange;
    selectedDateRef.current = selectedDate;
  }, [onChange, selectedDate]);

  useEffect(() => {
    if (!selectedDateRef.current) return;

    const isBeforeAllowedRange = disableBefore && selectedDateRef.current < disableBefore;
    const isAfterAllowedRange = disableAfter && selectedDateRef.current > disableAfter;

    if (isBeforeAllowedRange || isAfterAllowedRange) {
      onChangeRef.current(null);
    }

  }, [disableBefore, disableAfter]);
}