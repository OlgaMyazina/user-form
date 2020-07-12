import React from 'react'

import './Title.styl';

const Title = (props)=>{
  return (
    <h2 className='title'>
      {props.title}
    </h2>
  )
};

export default Title;