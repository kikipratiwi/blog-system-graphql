import React from 'react';

import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';
import UserPostList from './pages/user-public/user-post-list';
import AdminPage from './pages/admin/index';
import PostForm from './pages/admin/post/form';

import './styles/global.scss';

const fakeData = {
  id: 5,
  title: 'title from the props',
  body: 'also body from the props'
}

const fakeDataUser = {
  id: 5,
  name: 'name from the props',
  username: 'username from the props'
}

const App = () => {
  return (
    <>
      {/* 
      <AdminPage key={fakeDataUser.id} {...fakeDataUser} isUserPosts={true} />
      <PostForm isNew={false} {...fakeData}/>
      <UserPublic/>
      <UserPostList key={fakeDataUser.id} {...fakeDataUser} isUserPosts={false} />
      <PostDetail key={fakeData.id} {...fakeData} />
    */}
    <PostForm isNew={true} {...fakeDataUser} />
    </>
  );
}

export default App;
