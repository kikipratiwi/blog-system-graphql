import React from 'react';

import LayoutContainer from './components/layouts/layout-container';

import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';
import UserPostList from './pages/user-public/user-post-list';
import AdminPage from './pages/admin/index';

import './styles/global.scss';

const App = () => {
  return (
    <LayoutContainer>
      <AdminPage />
    </LayoutContainer>
  );
}

export default App;
