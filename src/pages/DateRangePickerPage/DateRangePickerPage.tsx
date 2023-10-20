import { useState } from "react";
import { DateRangePicker } from "../../components/DateRangePicker";

export function DateRangePickerPage() {
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);

  return (
    <div>
      <DateRangePicker date1={date1} date2={date2} onDate1Change={setDate1} onDate2Change={setDate2}/>
    </div>
  );
}
