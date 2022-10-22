import React from 'react';

const Button = ({cambio , color}) => {

  return (
    <div className='button'>
      <button onClick={cambio} style={{backgroundColor:color}}>{">"}</button>
    </div>
  );
};

export default Button;