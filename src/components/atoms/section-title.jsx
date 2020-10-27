import React from 'react';
import { Typography } from 'antd';

const AtomSectionTitle = (props) => {
  const fontStyle = props.fontStyle || '';
  
  return (
    <Typography.Text className={`text-primary f5 f3-l f3-m fw4 ${fontStyle}`}>
      {props.title}
    </Typography.Text>
  );
}

export default AtomSectionTitle; 
