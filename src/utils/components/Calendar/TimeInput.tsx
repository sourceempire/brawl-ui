import styles from "./TimeInput.module.css";

type Props = {
  date: Date | null;
  onChange: (date: Date) => void;
}

export function TimeInput({date}: Props) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { max, value } = event.target;
    if (isNaN(Number(value))) {
      event.target.value = "00";
    }
    if (Number(value) > Number(max)) {
      event.target.value = max;
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} type="text" max="23" min="0" onChange={handleInputChange} disabled={!date} placeholder="HH" defaultValue={"00"}/>
      :
      <input className={styles.input} type="text" max="59" min="0" onChange={handleInputChange} disabled={!date} placeholder="mm" defaultValue={"00"}/>
    </div>
  );
}
