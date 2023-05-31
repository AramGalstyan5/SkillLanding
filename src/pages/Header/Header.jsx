import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoF from '../../pic/F1Emblem.png';

const menu = [
	{
		tytle: 'Гонщики',
		link: '/drivers',
	},
	{
		tytle: 'Трассы',
		link: '/track',
	},
	{
		tytle: 'История',
		link: '/history',
	},
];

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to="/home">
					<img src={logoF} alt="F1" height="70" width="160" />
				</Link>
			</div>

			<div className={styles.wrapper}>
				<ul className={styles.menuu}>
					{menu.map((item, inx) => (
						<li key={`menu item ${inx}`}>
							<Link to={item.link}>{item.tytle}</Link>
						</li>
					))}
				</ul>
				<div className={styles.buttons}>
					<button className={styles.loginbutton}>Login</button>
					<button className={styles.singbutton}>SingUp</button>
				</div>
			</div>
		</div>
	);
};
export default Header;
