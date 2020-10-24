import React from 'react';

import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';
import UserPostList from './pages/user-public/user-post-list';

import './styles/global.scss';

const App = () => {
  return (
    <>
      <UserPublic />
      <PostDetail />
      <UserPostList />
    </>
  );
}

export default App;
