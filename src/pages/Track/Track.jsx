import React from 'react';
import styles from './Track.module.css';
import ImageHoverText from './ImageHoverText';
import pic1 from './TrackPic/bahrain.png';
import pic2 from './TrackPic/jiddah.jpg';
import pic3 from './TrackPic/avst.png';
import pic4 from './TrackPic/miami.jpg';
import pic5 from './TrackPic/azer.jpg';
import pic6 from './TrackPic/inola.jpg';
import pic7 from './TrackPic/monaco.jpg';
import pic8 from './TrackPic/spain.jpg';





const Track = () => {
	return (
		<div className="track">
			<h1>Календарь 2023</h1>
			<div className={styles.contauner} />
			<div className='image-container'>
			<ImageHoverText
          imageUrl={pic1}
          hoverText="1.Бахрейн"
        />
		<ImageHoverText
          imageUrl={pic2}
          hoverText="2.Джидда"
        />
		<ImageHoverText
          imageUrl={pic3}
          hoverText="3.Австралия"
        />
		<ImageHoverText
          imageUrl={pic4}
          hoverText="4.Майами"
        />
		<ImageHoverText
          imageUrl={pic5}
          hoverText="5.Азербайджан"
        />
		<ImageHoverText
          imageUrl={pic6}
          hoverText="6.Имола"
        />
		<ImageHoverText
          imageUrl={pic7}
          hoverText="7.Монако"
        />
		<ImageHoverText
          imageUrl={pic8}
          hoverText="8.Испания"
        />
		</div>
		</div>
	);
};
export default Track;
