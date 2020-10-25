import React from 'react';
import { Layout } from 'antd';

import AtomTitle from '../atoms/title';
import MoleculesFooter from '../molecules/footer';

const { Content } = Layout;

const LayoutPostDetail = (props) => {

  return (
    <>
      <AtomTitle title='BLOG.' align='right' />
      <Content className="mv6">{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutPostDetail; 
