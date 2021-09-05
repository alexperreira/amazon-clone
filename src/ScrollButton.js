import React, { useState } from 'react';
import './ScrolledButton.css';

const ScrollButton = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='navFooterBackToTop'>
			<button className='scrollButton' onClick={scrollToTop}>
				Back to Top
			</button>
		</div>
	);
};

export default ScrollButton;
