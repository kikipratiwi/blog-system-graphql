import React from 'react';
import { Layout } from 'antd';

import AtomSectionBody from '../atoms/section-body';
import MoleculesHeader from '../molecules/header';
import MoleculesSectionHeader from '../molecules/section-header';
import MoleculesFooter from '../molecules/footer';
import LayoutContainer from '../layouts/layout-container';

const { Content } = Layout;

const LayoutUserPublic = (props) => {
  const body = "BLOG. is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const sectionBodySize = { md: 16 }

  return (
    <LayoutContainer>
      <MoleculesHeader />
      <MoleculesSectionHeader title='Introduction' />
      <AtomSectionBody size={sectionBodySize} >
        {body}
      </AtomSectionBody>
      <Content className="mv6">{props.children}</Content>
      <MoleculesFooter />
    </LayoutContainer>
  );
}

export default LayoutUserPublic; 
