import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';

import AtomTitle from '../atoms/title';
import AtomSectionTitle from '../atoms/section-title';

const { Header } = Layout;

const MoleculesAdminHeader = (props) => {
  const greetingText = props.isHomepage? 'Good morning, ' : '';  
  const author = props.isHomepage? props.user : '';
  const defaultSize = {
    xs:24,
    sm:24,
    md:12,
    lg:12,
    xl:12
  };

  return (
    <Layout>
      <Header 
        className='bg-body'
        style={{ 
          position: 'fixed',
          zIndex: 1, 
          height: '200px',
          width: '90%',
          padding: 0,
          paddingTop: '50px',
          top: 0
        }}
      >
        <Row justify='space-between' align='middle'>
          <Col {...defaultSize}>
            <AtomSectionTitle 
              title={greetingText}
            />
            <AtomSectionTitle 
              fontStyle='text-secondary'
              title={author}
            />
          </Col>
          <Col {...defaultSize}>
            <AtomTitle title='BLOG.' align='right' />
          </Col>
          <Col span={24}>
            <Divider style={{margin: 0}} />
          </Col>
          <Col span={24}>
            {props.children}
          </Col>
        </Row>
      </Header>
    </Layout>
  );
}

export default MoleculesAdminHeader; 

