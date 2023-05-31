import React from 'react';
import { Header } from './pages';
import AppRouter from './AppRouter';
import style from './style.module.css';

function App() {
	return (
		<div className={style.wrapper}>
			<Header />
			<AppRouter />
		</div>
	);
}

export default App;