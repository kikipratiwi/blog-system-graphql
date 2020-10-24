import React from 'react';
import { Layout } from 'antd';

import AtomTitle from '../atoms/title';
import MoleculesFooter from '../molecules/footer';
import LayoutContainer from '../layouts/layout-container';

const { Content } = Layout;

const LayoutPostDetail = (props) => {

  return (
    <LayoutContainer>
      <AtomTitle title='BLOG.' align='right' />
      <Content className="mv6">{props.children}</Content>
      <MoleculesFooter />
    </LayoutContainer>
  );
}

export default LayoutPostDetail; 
