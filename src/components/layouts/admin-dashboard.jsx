import React from 'react';
import { Layout } from 'antd';

import MoleculesAdminHeader from '../molecules/admin-header';
import MoleculesFooter from '../molecules/footer';

import '../../styles/global.scss';

const { Content } = Layout;

const LayoutAdmin = (props) => {
  console.log(props);
  return (
    <>
      <MoleculesAdminHeader isHomepage={true} user='Anonim Imnida'>
        <div className='tr mv3'> {props.actionBar()} </div>
      </MoleculesAdminHeader>
      <Content style={{margin: '180px 0 0'}} >{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutAdmin; 
