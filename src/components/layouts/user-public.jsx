import React from 'react';
import { Layout } from 'antd';

import MoleculesUserHeader from '../molecules/user-header';
import MoleculesFooter from '../molecules/footer';

const { Content } = Layout;

const LayoutUserPublic = (props) => {
  return (
    <>
			<MoleculesUserHeader title={props.title} user={props.user} />
      <Content>{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutUserPublic; 
