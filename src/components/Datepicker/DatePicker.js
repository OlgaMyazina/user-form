import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


const Datepicker = ({errorText, ...props}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        clearable
        placeholder="10-10-2018"
        minDate={new Date('1920-01-01')}
        maxDate={new Date()}
        format="dd-MM-yyyy"
        inputVariant="filled"
        helperText={errorText}
        error={Boolean(errorText)}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Datepicker