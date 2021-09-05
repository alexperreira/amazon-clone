import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import Checkout from './Checkout';
import { useHistory } from 'react-router-dom';
import { getCartTotal } from './reducer';

function Payment() {
	const history = useHistory();
	const [{ cart, user }, dispatch] = useStateValue();
	return (
		<div className='payment'>
			<div className='payment__container'>
				{/* Payment section - delivery address */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>1 Shipping address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				{/* Payment section -  payment method */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>{/* Stripe API goes here */}</div>
				</div>

				{/* Payment section - review items */}
				<div className='payment__section'>
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{cart.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='order__summary'>
				<button>Place your order</button>
				<p className='disclaimer'>
					By placing your order, you agree to FAKE AMAZON CLONE's
					<a href=''> privacy notice</a> and <a href=''>conditions of use</a>.
				</p>
				<div className='summary__details'>
					<h3>Order Summary</h3>
					<table>
						<tbody>
							<tr>
								<td>
									<span>Items:</span>
								</td>
								<td>
									<span>$54.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Shipping & handling:</span>
								</td>
								<td>
									<span>$2.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Free Shipping:</span>
								</td>
								<td>
									<span>-$2.99</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Total before tax:</span>
								</td>
								<td>
									<span>$54.99</span>
									{/* get cart total */}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Payment;
