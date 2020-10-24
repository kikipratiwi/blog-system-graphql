import React from 'react';
import { Typography } from 'antd';

const AtomTitle = (props) => {
  return (
    <Typography.Title 
      level={props.heading || 2} 
      className='playfair-display'
      style={{ marginBottom:0 }}
    >
      BLOG.
    </Typography.Title>
  );
}

export default AtomTitle; 
