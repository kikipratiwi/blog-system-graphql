import React from 'react';
import { Layout } from 'antd';

import MoleculesHeader from '../molecules/header';
import MoleculesFooter from '../molecules/footer';
import LayoutContainer from '../layouts/layout-container';

const { Content } = Layout;

const LayoutUserPublic = (props) => {
  return (
    <LayoutContainer>
      <MoleculesHeader />
      <Content>{props.children}</Content>
      <MoleculesFooter />
    </LayoutContainer>
  );
}

export default LayoutUserPublic; 
