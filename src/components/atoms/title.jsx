import React from 'react';
import { Typography } from 'antd';

const AtomTitle = (props) => {
  const align = props.align || 'center';

  return (
    <Typography.Title 
    level={props.heading || 2} 
    className='playfair-display'
    style={{ 
      marginBottom:0,
      textAlign: `${align}`
    }}
    >
      {props.title}
    </Typography.Title>
  );
}

export default AtomTitle; 
