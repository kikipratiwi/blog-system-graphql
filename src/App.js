import React, { Suspense }  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Spinner from './components/atoms/spinner';

import defaultData from './data'; 
import routes from './routes';

import './styles/colors.scss';
import './styles/global.scss';

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
						<route.component {...defaultData.user} {...route.isNew} {...props} />
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
    <Switch>
			<Suspense fallback={<Spinner />}>{renderRoutes()}</Suspense>
			<Redirect to="/" />
		</Switch>
  );
}

export default App;
