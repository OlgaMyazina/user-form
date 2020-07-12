import React from "react";

import TextField from '@material-ui/core/TextField';

const Input = ({errorText, ...props}) => {
  return (
    <TextField variant="filled"
               fullWidth
               autoFocus
               helperText={errorText}
               error={Boolean(errorText)}
               {...props}
    />
  )
};

export default Input;
