import React, { useState } from 'react';
import styles from './Drivers.module.css';

const ImageSwitcher = () => {
	const ImageArray = [
		{
			id: 1,
			name: 'Льюис Хэмилтон',
			item: 'Семикратный чемпион мира Формулы 1',
			url: 'https://sports.tj/wp-content/uploads/2021/09/hemilton.jpg',
		},

		{
			id: 2,
			name: 'Фернандо Алонсо',
			item: 'Двухкратный чемпион мира Формулы 1',
			url:
				'https://cdn.ntvspor.net/df0d4fa1a23642d2be8a0e5ff781d380.jpg?&w=940&h=529&mode=crop',
		},

		{
			id: 3,
			name: 'Карлос Сайнс',
			item: 'Гонщик команды Ферарри ',
			url:
				'https://i.pinimg.com/736x/3a/ed/b9/3aedb9654443621bf3768683b9baa51d.jpg',
		},
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handleImageSwitch = () => {
		setCurrentImageIndex((prevState) => {
			if (prevState === ImageArray.length - 1) {
				return 0;
			}
			return prevState + 1;
		});
	};

	return (
		<div className={styles.container}>
			<img
				className={styles.imag}
				src={ImageArray[currentImageIndex].url}
				alt={ImageArray[currentImageIndex].name}
				width="500"
				height="400"
			/>

			<p>
				{ImageArray[currentImageIndex].name} <br />
				{ImageArray[currentImageIndex].item}
			</p>

			<button className={styles.but} onClick={handleImageSwitch}>
				Далее
			</button>
		</div>
	);
};

export default ImageSwitcher;
