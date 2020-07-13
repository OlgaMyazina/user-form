import React from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SelectSex = (props) => {
  return (
    <div className={props.className}>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="sex-select-label">Пол</InputLabel>
        <Select
          labelId="sex-select-label"
          id="sex-select"
          name='sex'
          {...props}
        >
          <MenuItem value='m' key='m'>Мужской</MenuItem>
          <MenuItem value='w' key='w'>Женский</MenuItem>

        </Select>
      </FormControl>
    </div>
  )
};

export default SelectSex