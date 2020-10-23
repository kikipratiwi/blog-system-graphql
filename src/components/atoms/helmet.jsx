import React from 'react';
import { Helmet } from 'react-helmet';

const AtomHelmet = (props) => (
  <Helmet>
    <title>Blog. {`| ${props.title}` || ''}</title>
  </Helmet>
);

export default AtomHelmet;
