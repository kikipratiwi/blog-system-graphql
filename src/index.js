import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { GraphQLClient, ClientContext } from 'graphql-hooks'

import 'tachyons';
import 'antd/dist/antd.css';

import App from './App';

const client = new GraphQLClient({
  url: 'https://graphqlzero.almansi.me/api'
})

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClientContext.Provider>,
  document.getElementById('root')
);
