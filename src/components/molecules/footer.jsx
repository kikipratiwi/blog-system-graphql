import React from 'react';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

import AtomSectionTitle from '../atoms/section-title';
import AtomTitle from '../atoms/title';

const Footer = () => {

  return (
    <>
      <Divider style={{ marginBottom: 80 }} />
      <Row className='flex items-end' justify='space-between'>
        <Col>
          <AtomSectionTitle 
            fontStyle='f6-ns fw4'
            sectionTitle='Copyrights Blog 2020.'
          />
        </Col>
        <Col>
          <AtomTitle />
        </Col>
      </Row>
    </>
  );
}

export default Footer; 
