import React from 'react';
import { Typography } from 'antd';

const AtomSectionTitle = (props) => {
  return (
    <Typography.Text className={props.fontStyle}>
      {props.sectionTitle}
    </Typography.Text>
  );
}

export default AtomSectionTitle; 
