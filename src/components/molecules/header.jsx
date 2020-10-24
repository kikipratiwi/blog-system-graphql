import React from 'react';
import { Layout } from 'antd';

import AtomTitle from '../atoms/title';

const { Header } = Layout;

const MoleculesHeader = (props) => {

  return (
    <Layout>
    <Header 
      style={{ 
        backgroundColor: 'transparent',
        position: 'fixed', 
        zIndex: 1, 
        width: '100%',
        left: -15
      }}
    >
      <AtomTitle className='flex justify-end' title='BLOG.' align='right' />
    </Header>
    </Layout>
  );
}

export default MoleculesHeader; 
