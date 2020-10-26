import React from 'react';

const routes = [
	{
		component: React.lazy(() => import('./pages/registration/school')),
		exact: true,
		name: 'School Registrasion',
		path: '/',
	},
	{
		component: React.lazy(() => import('./pages/admin/login')),
		exact: true,
		name: 'Admin Login',
		path: '/admin/login',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/home')),
		exact: true,
		name: 'Admin Home',
		path: '/admin/beranda',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/subject')),
		exact: true,
		name: 'Admin Subject',
		path: '/admin/mata-pelajaran',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/subject/new')),
		exact: true,
		name: 'Admin Subject New',
		path: '/admin/mata-pelajaran/baru',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/subject/edit')),
		exact: true,
		name: 'Admin Subject Edit',
		path: '/admin/mata-pelajaran/ubah',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/subject/detail')),
		exact: true,
		name: 'Admin Subject Detail',
		path: '/admin/mata-pelajaran/detail',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/package')),
		exact: true,
		name: 'Admin Package',
		path: '/admin/paket',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/package/new')),
		exact: true,
		name: 'Admin Package New',
		path: '/admin/paket/baru',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/package/edit')),
		exact: true,
		name: 'Admin Package Edit',
		path: '/admin/paket/ubah',
	},
	{
		adminGuard: true,
		component: React.lazy(() => import('./pages/admin/package/detail')),
		exact: true,
		name: 'Admin Package Detail',
		path: '/admin/paket/detail',
	},

	{
		component: React.lazy(() => import('./pages/class/login')),
		exact: true,
		name: 'Class List',
		path: '/kelas/login',
	},
	{
		classGuard: true,
		component: React.lazy(() => import('./pages/class/dashboard')),
		exact: true,
		name: 'Class List',
		path: '/kelas/beranda',
	},
	{
		component: React.lazy(() => import('./pages/class/pin-input')),
		exact: true,
		name: 'Class PIN Input',
		path: '/kelas/input-pin',
		teacherGuard: true,
	},
	{
		component: React.lazy(() => import('./pages/class/new')),
		exact: true,
		name: 'New Class',
		path: '/kelas/baru',
		teacherGuard: true,
	},
	{
		component: React.lazy(() => import('./pages/class/detail')),
		exact: true,
		name: 'Class Detail',
		path: '/kelas/detail',
		classGuard: true,
	},
	{
		component: React.lazy(() => import('./pages/profile/change-password')),
		exact: true,
		name: 'Pofile Change Password',
		path: '/profil/ubah-password',
		classGuard: true,
	},
	{
		component: React.lazy(() => import('./pages/profile/edit')),
		exact: true,
		name: 'Pofile Edit',
		path: '/profil/ubah',
		classGuard: true,
	},
	{
		component: React.lazy(() =>
			import('./pages/registration/payment-notification')
		),
		exact: true,
		name: 'School Registration Notification',
		path: '/registrasi/pembayaran',
	},
	{
		component: React.lazy(() => import('./pages/registration/teacher')),
		exact: true,
		name: 'Teacher Registration',
		path: '/registrasi/guru',
	},
	{
		component: React.lazy(() => import('./pages/vc/student-portal')),
		exact: true,
		name: 'Student VC',
		path: '/vc/student/:classId/:className/:lessonName',
	},
	{
		component: React.lazy(() => import('./pages/vc/teacher-portal')),
		exact: true,
		name: 'Teacher VC',
		path: '/vc/teacher/:classId/:className',
	},
];

export default routes;
