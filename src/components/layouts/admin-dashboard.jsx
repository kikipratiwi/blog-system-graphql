import React from 'react';
import { Layout, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import MoleculesAdminHeader from '../molecules/admin-header';
import MoleculesFooter from '../molecules/footer';

import '../../styles/global.scss';

const { Content } = Layout;

const LayoutAdmin = (props) => {
  return (
    <>
      <MoleculesAdminHeader isHomepage={true} user='Anonim Imnida'>
        <div className='tr mv3'>
          <Button onClick={console.log('Write button clicked')} icon={<PlusOutlined />} className='btn-default mv3'>Write</Button>
        </div>
      </MoleculesAdminHeader>
      <Content style={{margin: '150px 0 100px'}} >{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutAdmin; 
