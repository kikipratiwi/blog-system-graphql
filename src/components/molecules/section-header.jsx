import React from 'react';
import { Divider } from 'antd';

import AtomSectionTitle from '../atoms/section-title';

const MoleculesSectionHeader = (props) => {

  return (
    <div className='section-header'>
      <AtomSectionTitle 
        title={props.title}
      />
      { props.author ? (
        <AtomSectionTitle 
          fontStyle='text-tritary'
          title={props.author}
        />
      ) : (
        ''
      )}
      <Divider style={{ marginTop: 100 }} />
    </div>
  );
}

export default MoleculesSectionHeader; 
