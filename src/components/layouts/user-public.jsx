import React from 'react';
import { Layout } from 'antd';

import MoleculesUserHeader from '../molecules/user-header';
import MoleculesFooter from '../molecules/footer';

const { Content } = Layout;

const LayoutUserPublic = (props) => {
  const author = props.user || false;

  return (
    <>
			<MoleculesUserHeader title={props.title} user={author} />
      <Content>{props.children}</Content>
      <MoleculesFooter />
    </>
  );
}

export default LayoutUserPublic; 
