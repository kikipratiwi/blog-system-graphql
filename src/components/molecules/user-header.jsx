import React from 'react';
import { Row, Col } from 'antd';

import AtomSectionTitle from '../atoms/section-title';
import AtomTitle from '../atoms/title';

const MoleculesUserHeader = (props) => {
  const author = props.user ? ` / by: ${props.user}` : '';

  return (
    <Row justify='space-between' align='bottom'>
      <Col span={16} >
        <AtomSectionTitle 
          title={props.title}
        />
        <AtomSectionTitle 
          fontStyle='text-secondary'
          title={author}
        />
      </Col>
      <Col span={8} >
        <AtomTitle className='flex justify-end' title='BLOG.' align='right' />
      </Col>
    </Row>
  );
}

export default MoleculesUserHeader; 
