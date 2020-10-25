import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Space } from 'antd';

import LayoutContainer from '../../../components/layouts/layout-container';
import LayoutAdmin from '../../../components/layouts/admin-dashboard';
import AtomTextArea from '../../../components/atoms/inputs/textarea';

const PostForm = (props) => {
  const size = {
    xs:24,
    sm:24,
    md:18,
    lg:18,
    xl:16
  };

  const publish = () => {
    console.log('publish button clicked');
  }

  const update = () => {
    console.log('update button clicked');
  }

  const cancel = () => {
    console.log('cancel button clicked');
  }

	return (
    <LayoutContainer title=''>
      <LayoutAdmin actionBar={ () => (
        <Space>
          <Button type='link' className='btn-default mv3' onClick={cancel}>{props.isNew? 'Discard' : 'Cancel'}</Button>
          <Button onClick={props.isNew? publish : update} className='btn-default mv3'>{props.isNew? 'Publish' : 'Update'}</Button>
        </Space>
      )}>
        <Row justify='center' className='mb4'>
          <Col {...size}>
            <AtomTextArea
              name='title'
              placeholder='Add title'
              style={{
                color: 'rgba(0, 0, 0, 0.85)',
                fontWeight: 600,
                fontSize: '30px',
                lineHeight: 1.35,
              }}
              fontFamily='playfair-display' />
          </Col>
        </Row>

        <Row justify='center'>
          <Col {...size}>
            <AtomTextArea
              name='body'
              placeholder='Start writing... '
              style={{
                color: '#202124bd',
                fontWeight: 400,
                lineHeight: 1.8
              }} />
          </Col>
        </Row>
      </LayoutAdmin>
    </LayoutContainer>
	);
};

export default PostForm;
