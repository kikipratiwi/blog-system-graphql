import React from 'react';
import { Typography } from 'antd';

const AtomSectionTitle = (props) => {
  const fontStyle = props.fontStyle || '';
  
  return (
    <Typography.Text className={`text-secondary f3-ns fw4 ${fontStyle}`}>
      {props.title}
    </Typography.Text>
  );
}

export default AtomSectionTitle; 
