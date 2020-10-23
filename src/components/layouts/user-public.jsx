import React from 'react';
import { Layout } from 'antd';

import AtomSectionBody from '../atoms/section-body';
import MoleculesHeader from '../molecules/header';
import MoleculesFooter from '../molecules/footer';

const { Content } = Layout;

const LayoutUserPublic = (props) => {

  return (
    <div className='mh5 mv4'>
      <MoleculesHeader sectionTitle='Introduction' />
      <AtomSectionBody />
      <Content className="mv6">{props.children}</Content>
      <MoleculesFooter />
    </div>
  );
}

export default LayoutUserPublic; 
