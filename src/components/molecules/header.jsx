import React from 'react';
import { Typography } from 'antd';
import { Col, Row } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';

import AtomTitle from '../atoms/title';

const { Header, Content, Footer } = Layout;

const MoleculesHeader = (props) => {

  return (
    <Layout>
    <Header 
      style={{ 
        backgroundColor: 'transparent',
        position: 'fixed', 
        zIndex: 1, 
        width: '100%',
        left: 0
      }}
    >
      <AtomTitle className='flex justify-end' title='BLOG.' align='right' />
    </Header>
    </Layout>
  );
}

export default MoleculesHeader; 
