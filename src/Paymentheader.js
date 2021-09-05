import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import './Paymentheader.css';

function Paymentheader() {
	const history = useHistory();
	const [{ cart, user }, dispatch] = useStateValue();
	return (
		<div className='payment__header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
					alt=''
				/>
			</Link>
			<h1 className='headline'>
				Checkout (<Link to='/checkout'>{cart?.length} items)</Link>
			</h1>
			<img
				className='secure'
				src='https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png'
				alt=''
			/>
		</div>
	);
}

export default Paymentheader;
