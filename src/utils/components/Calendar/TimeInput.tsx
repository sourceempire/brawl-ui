import React from "react";
import styles from "./TimeInput.module.css";
import useTimeHandler from "./hooks/useTimeHandler";

const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_LEFT_KEY = "ArrowLeft";
const BACKSPACE_KEY = "Backspace";

type Props = {
  date: Date | null;
  onChange: (date: Date) => void;
};

export function TimeInput({ date, onChange }: Props) {
  const {
    hour,
    minute,
    resetTime,
    onHourFocus,
    onMinuteFocus,
    hourInputRef,
    minuteInputRef,
    handleHourChange,
    handleMinuteChange,
  } = useTimeHandler({ onChange, date });

  type KeyDownHandlerProps = {
    event: React.KeyboardEvent<HTMLInputElement>;
    handleChange: (digit: number) => void;
    focusRef: React.RefObject<HTMLInputElement>;
    emptyField: "hour" | "minute";
  };

  const handleKeyDown = ({ event, handleChange, focusRef, emptyField }: KeyDownHandlerProps) => {
    switch (event.key) {
      case ARROW_RIGHT_KEY:
      case ARROW_LEFT_KEY:
        focusRef.current?.focus();
        break;
      case BACKSPACE_KEY:
        resetTime({ emptyField });
        break;
      default: {
        const number = parseInt(event.key, 10);
        if (!isNaN(number)) {
          handleChange(number);
        }
      }
    }
  };

  const handleHourKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>
    handleKeyDown({ event, handleChange: handleHourChange, focusRef: minuteInputRef, emptyField: "hour" });

  const handleMinuteKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>
    handleKeyDown({ event, handleChange: handleMinuteChange, focusRef: hourInputRef, emptyField: "minute" });

  return (
    <div className={styles.inputContainer}>
      <input
        ref={hourInputRef}
        className={styles.input}
        value={hour}
        disabled={!date}
        onFocus={onHourFocus}
        onKeyDown={handleHourKeyDown}
      />
      :
      <input
        ref={minuteInputRef}
        className={styles.input}
        value={minute}
        disabled={!date}
        onFocus={onMinuteFocus}
        onKeyDown={handleMinuteKeyDown}
      />
    </div>
  );
}
