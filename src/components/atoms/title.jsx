import React from 'react';
import { Typography } from 'antd';


const AtomTitle = (props) => {
  const align = props.align || 'center';

  return (
    <Typography.Title 
      level={2} 
      className='playfair-display'
      style={{ 
        lineHeight: 'inherit',
        textAlign: `${align}`,
        margin:0
      }}
    >
      {props.title}
    </Typography.Title>
  );
}

export default AtomTitle; 
