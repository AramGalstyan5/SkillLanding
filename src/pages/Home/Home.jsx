import React from 'react';
import styles from './Home.module.css';
import pic1 from '../../pic/f44.jpeg';
import HomeMenu from './HomeMenu';

const Home = () => {
	return (
		<div className="home">
			<h1>Добро пожаловать на сайт про Формулу 1</h1>
			<div className="mainTitle">
				<img
					className={styles.pic1}
					src={pic1}
					alt="44"
					width="800"
					height="500"
				/>
			</div>
			<HomeMenu />
			<div className="text">
				<p>
					
				</p>{' '}
			</div>
		</div>
	);
};
export default Home;
