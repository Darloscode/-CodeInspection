import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function DateCalendarValue() {
  const [value, setValue] = React.useState< Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    console.log(newValue?.format('YYYY-MM-DD'));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem label="Controlled calendar">
          <DateCalendar value={value} onChange={(newValue) => handleChange(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
