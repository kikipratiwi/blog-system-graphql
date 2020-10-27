import React from 'react';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

import AtomSectionTitle from '../atoms/section-title';
import AtomTitle from '../atoms/title';

const MoleculesFooter = () => {

  return (
    <>
      <Divider style={{ marginBottom: 80 }} />
      <Row className='flex items-end' justify='space-between'>
        <Col>
          <AtomSectionTitle 
            fontStyle='f6 f5-l f5-m'
            title='Copyrights Blog 2020.'
          />
        </Col>
        <Col>
          <AtomTitle title='BLOG.' />
        </Col>
      </Row>
    </>
  );
}

export default MoleculesFooter; 
