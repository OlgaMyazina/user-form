import React from "react";

import TextField from "@material-ui/core/TextField";

const Input = ({ errorText, ...props }) => {
  return (
    <div className={props.className}>
      <TextField
        variant="filled"
        fullWidth
        autoFocus
        helperText={errorText}
        error={Boolean(errorText)}
        {...props}
      />
    </div>
  );
};

export default Input;
