import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer'>
			<div className='row__one'>
				<div className='column'>
					<h3>Get to Know Us</h3>
					<ul>
						<li>Careers</li>
						<li>Blog</li>
						<li>About Amazon</li>
						<li>Sustainability</li>
						<li>Press Center</li>
						<li>Investor Relations</li>
						<li>Amazon Devices</li>
					</ul>
				</div>
				<div className='column'>
					<h3>Make Money with Us</h3>
					<ul>
						<li>Sell products on Amazon</li>
						<li>Sell apps on Amazon</li>
						<li>Become an Affiliate</li>
						<li>Become a Delivery Driver</li>
						<li>Start a package delivery business</li>
						<li>Advertise Your Products</li>
						<li>Self-Publish with Us</li>
						<li>Host an Amazon Hub</li>
						<li>See More Make Money with Us</li>
					</ul>
				</div>
				<div className='column'>
					<h3>Amazon Payment Products</h3>
					<ul>
						<li>Amazon Rewards Visa Signature Cards</li>
						<li>Amazon.com Store Card</li>
						<li>Amazon Secured Card</li>
						<li>Amazon Business Card</li>
						<li>Amazon Business Line of Credit</li>
						<li>Shop with Points</li>
						<li>Credit Card Marketplace</li>
						<li>Reload Your Balance</li>
						<li>Amazon Currency Converter</li>
					</ul>
				</div>
				<div className='column'>
					<h3>Let Us Help You</h3>
					<ul>
						<li>Amazon and COVID-19</li>
						<li>Your Account</li>
						<li>Your Orders</li>
						<li>shipping Rates & Policies</li>
						<li>Amazon Prime</li>
						<li>Returns & Replacements</li>
						<li>Manage Your Content and Devices</li>
						<li>Amazon Assistant</li>
						<li>Help</li>
					</ul>
				</div>
			</div>
			<div className='row__two'>
				<div className='navFooterLine'>
					<Link to='/'>
						<img
							className='footer__logo'
							src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
							alt=''
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
