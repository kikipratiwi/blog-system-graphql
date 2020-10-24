import React from 'react';
import { Col, Typography } from 'antd';

const AtomSectionBody = (props) => {
  const defaultSize = {
    xs:24,
    sm:24,
    md:12,
    lg:12,
    xl:12
  };

  const currentSize = {...defaultSize, ...props.size};
  
  return (
    <Col {...currentSize}>        
      <Typography.Text 
        style={{
          lineHeight: 1.8
        }}
        className='lh-copy lh-title-ns lh-copy-m text-secondary fw4'
      >
        {props.children}
      </Typography.Text>
    </Col>
  );
}

export default AtomSectionBody; 
