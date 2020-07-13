import React from 'react';
import InputMask from 'react-input-mask';
import Input from "../Input/Input";

const Phone = (props) => {
  return (
    <div className={props.className}>
      <InputMask
        mask='+7 (999) 999-99-99'
        name='phone'
        label='Мобильный телефон'
        onChange={props.onChange}
        helperText={props.errorText}
        error={Boolean(props.errorText)}
        required={props.required}
      >
        {inputProps => <Input {...inputProps} />}
      </InputMask>
    </div>
  )

};

export default Phone;