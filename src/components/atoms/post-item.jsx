import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Typography, Divider } from 'antd';

import { postSummary, toTitleCase } from '../../utils/utils';

import '../../styles/post-item.scss'

const AtomPostItem = (props) => {
  return (
    <Col 
      xs={24} sm={24} md={12} lg={12} xl={6}
      className='h-100 h5-m h5-l'
    >
      {<Divider />}
      <Typography.Text className='fw6' >
        {toTitleCase(props.title)}
      </Typography.Text>

      <Typography.Paragraph 
        style={{
          lineHeight: 1.8
        }}
        className='text-primary fw4'
      >
        {postSummary(props.body)+'...'}
      </Typography.Paragraph>

      <Link className='read-btn fw6' to={`/post/${props.id}`}>
        Read
      </Link>
    </Col> 
  );
}

export default AtomPostItem; 
