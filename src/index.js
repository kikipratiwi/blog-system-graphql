import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GraphQLClient, ClientContext } from 'graphql-hooks'

import config from './config';

import 'tachyons';
import 'antd/dist/antd.css';

import App from './App';

const client = new GraphQLClient({
  url: config.API_URL
})

ReactDOM.render(
  <ClientContext.Provider value={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClientContext.Provider>,
  document.getElementById('root')
);
