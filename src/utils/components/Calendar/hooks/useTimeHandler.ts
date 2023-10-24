import { useState, useEffect, useRef } from "react";
import { EMPTY_TIME_STRING } from "../types";

type ResetOption = {
  emptyField?: "hour" | "minute";
};

type Options = {
  date: Date | null;
  onChange: (date: Date) => void;
};

function useTimeHandler({ date, onChange }: Options) {
  const onChangeRef = useRef(onChange);
  const dateRef = useRef(date);

  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);

  const [hour, setHour] = useState(EMPTY_TIME_STRING);
  const [minute, setMinute] = useState(EMPTY_TIME_STRING);

  const [hourHasChangedSinceFocus, setHourHasChangedSinceFocus] = useState(false);
  const [minuteHasChangedSinceFocus, setMinuteHasChangedSinceFocus] = useState(false);

  const onHourFocus = () => setHourHasChangedSinceFocus(false);
  const onMinuteFocus = () => setMinuteHasChangedSinceFocus(false);

  const handleHourChange = (digit: number) => {
    setHour((currentHour) => {
      if (!hourHasChangedSinceFocus) {
        setHourHasChangedSinceFocus(true);
        if (digit > 2) {
          minuteInputRef.current?.focus();
        }
        return "0" + digit;
      }

      const secondHourNumber = parseInt(currentHour[1], 10);

      if (secondHourNumber < 2 || (secondHourNumber === 2 && digit < 4)) {
        minuteInputRef.current?.focus();
        return currentHour[1] + digit.toString();
      }

      minuteInputRef.current?.focus();
      return "23";
    });
  };

  const handleMinuteChange = (digit: number) => {
    setMinute((currentMinute) => {
      if (!minuteHasChangedSinceFocus) {
        setMinuteHasChangedSinceFocus(true);
        return "0" + digit;
      }

      const newMinute = currentMinute[1] + digit.toString();

      if (parseInt(newMinute, 10) > 59) {
        return "0" + digit;
      }

      return newMinute;
    });
  };

  useEffect(() => {
    onChangeRef.current = onChange;
    dateRef.current = date;
  }, [date, onChange]);

  useEffect(() => {
    if (!dateRef.current) return;

    const hourNumber = parseInt(hour, 10);
    const minuteNumber = parseInt(minute, 10);

    if (isNaN(hourNumber) || isNaN(minuteNumber)) return;

    const newDate = new Date(dateRef.current);
    newDate.setHours(hourNumber);
    newDate.setMinutes(minuteNumber);

    onChangeRef.current(newDate);
  }, [hour, minute]);

  const resetTime = (resetOption: ResetOption = {}) => {
    if (!date) return;

    const updatedDate = new Date(date);
    updatedDate.setHours(0);
    updatedDate.setMinutes(0);
    onChange(updatedDate);

    if (resetOption.emptyField === "hour") {
      setHour(EMPTY_TIME_STRING);
    } else if (resetOption.emptyField === "minute") {
      setMinute(EMPTY_TIME_STRING);
    } else {
      setHour(EMPTY_TIME_STRING);
      setMinute(EMPTY_TIME_STRING);
    }
  };

  return {
    hour,
    setHour,
    minute,
    setMinute,
    resetTime,
    onHourFocus,
    onMinuteFocus,
    handleHourChange,
    handleMinuteChange,
    minuteInputRef,
    hourInputRef
  };
}

export default useTimeHandler;
