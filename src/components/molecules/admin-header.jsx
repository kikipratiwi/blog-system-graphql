import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';

import AtomSectionTitle from '../atoms/section-title';
import AtomTitle from '../atoms/title';

import { defaultData } from '../../data/index'

const { Header } = Layout;

const MoleculesAdminHeader = (props) => {
  const greetingText = props.isHomepage? 'Morning, ' : '';  
  const author = props.user? props.user : defaultData.user.name;

  return (
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
        <Row justify='space-between' align='top'>
          <Col span={16} >
            <AtomSectionTitle 
              title={greetingText}
            />
            <AtomSectionTitle 
              fontStyle='text-secondary'
              title={author}
            />
          </Col>
          <Col span={8} >
            <AtomTitle title='BLOG.' align='right' />
          </Col>
          <Col span={24}>
            <Divider style={{margin: 2}} />
          </Col>
          <Col span={24}>
            {props.children}
          </Col>
        </Row>
      </Header>
  );
}

export default MoleculesAdminHeader; 

