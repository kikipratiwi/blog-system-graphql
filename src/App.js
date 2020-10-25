import React from 'react';

import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';
import UserPostList from './pages/user-public/user-post-list';
import AdminPage from './pages/admin/index';
import PostForm from './pages/admin/post/form';

import './styles/global.scss';

const App = () => {
  return (
    <PostForm isNew={true} />
    // <AdminPage/>
    // <UserPostList/>
    // <PostDetail/>
    // <UserPublic/>
    );
}

export default App;
