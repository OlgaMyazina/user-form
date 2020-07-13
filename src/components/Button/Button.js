import React from 'react';
import Button from '@material-ui/core/Button';


const CustomizedButtons = (props) => {

  return (
    <div className={props.className}>
      <Button variant="contained" color="inherit" className="button" fullWidth size="large" {...props}>
        {props.children}
      </Button>
    </div>
  );
};

export default CustomizedButtons