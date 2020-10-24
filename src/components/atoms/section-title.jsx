import React from 'react';
import { Typography } from 'antd';

const AtomSectionTitle = (props) => {
  const fontStyle = props.fontStyle || 'f3-ns fw4';
  
  return (
    <Typography.Text className={`text-secondary ${fontStyle}`}>
      {props.title}
    </Typography.Text>
  );
}

export default AtomSectionTitle; 
