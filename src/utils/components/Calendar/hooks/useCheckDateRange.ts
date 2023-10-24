import { useEffect, useRef } from "react";
import { CalendarProps } from "../types";

type Options = Pick<CalendarProps, "selectedDate" | "disableBefore" | "disableAfter" | "onChange" | "includeTime">;

/**
 * Custom hook that manages date selections, validations, and time reset based on provided options.
 * It ensures that the selected date remains within the specified range and optionally resets the time part of the date.
 */
export function useCheckDateRange({ selectedDate, disableBefore, disableAfter, includeTime, onChange }: Options) {
  const onChangeRef = useRef(onChange);
  const selectedDateRef = useRef(selectedDate);

  /**
   * This effect updates the refs for `onChange` and `selectedDate` whenever they change,
   * to ensure that the latest values are captured in the closures of other effects and functions.
   */
  useEffect(() => {
    onChangeRef.current = onChange;
    selectedDateRef.current = selectedDate;
  }, [onChange, selectedDate]);


  /**
   * This effect checks whether the selected date is outside the allowed date range.
   * If the selected date is before `disableBefore` or after `disableAfter`, it triggers the `onChange` handler with `null`.
   */
  useEffect(() => {
    if (!selectedDateRef.current) return;

    const isBeforeAllowedRange = disableBefore && selectedDateRef.current < disableBefore;
    const isAfterAllowedRange = disableAfter && selectedDateRef.current > disableAfter;

    if (isBeforeAllowedRange || isAfterAllowedRange) {
      onChangeRef.current(null);
    }
  }, [disableBefore, disableAfter]);

  const isFirstRenderRef = useRef(true);
  /**
   * This effect handles the optional time reset feature.
   * If `includeTime` is false, and a date is selected, it resets the time part of the date to midnight,
   * and triggers the `onChange` handler with the updated date.
   */
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    if (includeTime === undefined) return;

    if (includeTime === false && selectedDateRef.current) {
      const dateWithResetTime = new Date(selectedDateRef.current);
      dateWithResetTime.setHours(0);
      dateWithResetTime.setMinutes(0);
      onChangeRef.current(dateWithResetTime);
    }
  }, [includeTime]);
}
