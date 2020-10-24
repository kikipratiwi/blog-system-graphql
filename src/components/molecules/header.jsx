import React from 'react';
import { Col, Row } from 'antd';
import { Divider } from 'antd';

import AtomSectionTitle from '../atoms/section-title';
import AtomTitle from '../atoms/title';

const MoleculesHeader = (props) => {

  return (
    <>
      <Row className='flex items-end' justify='space-between'>
        <Col>
          <AtomSectionTitle 
            fontStyle='f3-ns fw4'
            sectionTitle={props.sectionTitle}
          />
        </Col>
        <Col>
          <AtomTitle />
        </Col>
      </Row>
      <Divider style={{ marginTop: 100 }} />
    </>
  );
}

export default MoleculesHeader; 
