import React, { Suspense }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Spinner from './components/atoms/spinner';
import UserPublic from './pages/user-public/index';
import PostDetail from './pages/user-public/post-detail';
import UserPostList from './pages/user-public/user-post-list';
import AdminPage from './pages/admin/index';
import PostForm from './pages/admin/post/form';

import routes from './routes';
import defaultData from './data'; 

import './styles/colors.scss';
import './styles/global.scss';

const fakeData = {
  id: 5,
  title: 'title from the props',
  body: 'also body from the props'
}

const renderRoutes = () => {

	return routes.map((route, idx) => {
		if (route.adminGuard) {
			return (
				<Route
					key={idx}
					path={route.path}
					exact={route.exact}
					name={route.name}
					render={(props) =>
						<route.component {...defaultData.user} {...props} />
					}
				/>
			);
		} else {
			return (
				<Route
					key={idx}
					path={route.path}
					exact={route.exact}
					name={route.name}
					render={(props) => <route.component {...props} />}
				/>
			);
		}
	});
};

const App = (props) => {
  return (
    <>
    <Switch>
			<Suspense fallback={<Spinner />}>{renderRoutes()}</Suspense>
			<Redirect to="/" />
		</Switch>
      {/* 
    */}
    {/* <AdminPage key={defaultData.user.id} {...defaultData.user} isUserPosts={true} />
    <PostForm isNew={false} {...fakeData}/>
    <UserPostList key={defaultData.user.id} {...defaultData.user} isUserPosts={false} />
    <PostDetail key={fakeData.id} {...fakeData} />
    <PostForm isNew={true} {...defaultData.user} />
    <UserPublic/> */}
    </>
  );
}

export default App;
