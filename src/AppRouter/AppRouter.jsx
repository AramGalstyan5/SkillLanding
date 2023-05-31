import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './style.module.css';
import { Drivers, Home, History, Track } from '../pages';

const AppRouter = () => {
	return (
		<div className={style.appContainer}>
			<Switch>
				<Route path="/history">
					<History />
				</Route>

				<Route path="/drivers">
					<Drivers />
				</Route>
				<Route path="/track">
					<Track />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Redirect from="*" to="/home">
					<Home />
				</Redirect>
			</Switch>
		</div>
	);
};

export default AppRouter;
