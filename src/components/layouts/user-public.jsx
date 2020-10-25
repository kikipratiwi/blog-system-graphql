import React from 'react';
import { Layout } from 'antd';

import MoleculesHeader from '../molecules/header';
import MoleculesFooter from '../molecules/footer';

const { Content } = Layout;

const LayoutUserPublic = (props) => {
  return (
    <>
      <MoleculesHeader />
      <Content>{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutUserPublic; 
