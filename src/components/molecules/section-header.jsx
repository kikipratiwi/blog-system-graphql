import React from 'react';
import { Divider } from 'antd';

import AtomSectionTitle from '../atoms/section-title';

const MoleculesSectionHeader = (props) => {

  return (
    <>
      <AtomSectionTitle 
        title={props.title}
      />
      { props.author ? (
        <AtomSectionTitle 
          fontStyle='text-secondary'
          title={props.author}
        />
      ) : (
        ''
      )}
      <Divider style={{ marginTop: 100 }} />
    </>
  );
}

export default MoleculesSectionHeader; 
