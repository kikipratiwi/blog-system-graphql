import React from 'react';
import { Link } from 'react-router-dom';

import { Col, Typography, Divider } from 'antd';

import '../../styles/post-item.scss'

const AtomPostItem = (props) => {

  return (
    <Col 
      xs={24} sm={24} md={12} lg={12} xl={6}
      className='post-card'
    >
      {<Divider />}
      <Typography.Text className='fw6' >
        {props.title || 'Post Title'}
      </Typography.Text>

      <Typography.Paragraph>
        {props.body || 'This is post body, but only 15 words'}
      </Typography.Paragraph>

      <Link className='read-btn fw6'>
        Read
      </Link>
    </Col> 
  );
}

export default AtomPostItem; 
