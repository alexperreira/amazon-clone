import React from 'react';
import './Home.css';
import Product from './Product';
// import './index.css';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-4451_SVOD_PD21_SellTest/GW-PV-DesktopTallHero_RB-4451_SVOD_TWAR_SellTest_Wave2_Settled_opt2_3000x1200._CB665601037_.jpg'
					alt=''
				/>

				<div className='home__row'>
					<Product
						id='2341241234'
						title='The Lean Startup'
						price={29.99}
						image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
						rating={3}
					/>
					<Product
						id='678768564'
						title='KitchenAid KP26M1XER 6 Qt. Professional 600 Series Bowl-Lift Stand Mixer - Empire Red'
						price={529.95}
						image='https://m.media-amazon.com/images/I/81BOGWDXGHL._AC_SL1500_.jpg'
						rating={5}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='67545623'
						title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal'
						price={29.99}
						image='https://m.media-amazon.com/images/I/61MZfowYoaL._AC_SL1000_.jpg'
						rating={4}
					/>
					<Product
						id='343243242'
						title='Garmin Vivoactive 4, GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors and More, Black'
						price={254.99}
						image='https://m.media-amazon.com/images/I/51OCzuItD9L._AC_SL1000_.jpg'
						rating={4}
					/>
					<Product
						id='539224074'
						title='2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Silver'
						price={1099.0}
						image='https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SL1500_.jpg'
						rating={4}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='75330995'
						title='SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA (LS49AG952NNXZA)'
						price={2499.99}
						image='https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SL1500_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
