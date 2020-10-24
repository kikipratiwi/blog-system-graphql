import React from 'react';

import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <UserPublic />
      <PostDetail />
    </>
  );
}

export default App;
