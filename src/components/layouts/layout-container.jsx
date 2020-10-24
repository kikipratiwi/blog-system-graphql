import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const LayoutContainer = (props) => {
  const spacing = props.spacing || 'mh4 mh5-m mh5-l mv4'
  return (
    <div className={spacing}>
      <Content>{props.children}</Content>
    </div>
  );
}

export default LayoutContainer; 
