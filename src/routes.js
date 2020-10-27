import React from 'react';

const routes = [
	{
		component: React.lazy(() => import('./pages/user-public/index')),
		exact: true,
		name: 'User Public Home',
		path: '/',
	},
	{
		component: React.lazy(() => import('./pages/user-public/user-post-list')),
		exact: true,
		name: 'User Public User Post List',
		path: '/:userId/posts',
	},
	{
		component: React.lazy(() => import('./pages/user-public/post-detail')),
		exact: true,
		name: 'Post Detail',
		path: '/post/:postId',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/index')),
		exact: true,
		name: 'Admin Home',
		path: '/admin',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/post/form')),
		exact: true,
		name: 'Admin Post New',
		path: '/admin/post/new',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/post/form')),
		exact: true,
		name: 'Admin Post edit',
		path: '/admin/post/:postId/edit',
	},
];

export default routes;
