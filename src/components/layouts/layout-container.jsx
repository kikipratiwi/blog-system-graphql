import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const LayoutContainer = (props) => {
  const spacing = props.spacing || 'mh5 mv4'
  return (
    <div className={spacing}>
      <Content>{props.children}</Content>
    </div>
  );
}

export default LayoutContainer; 
