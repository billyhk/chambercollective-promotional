import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	/*
	STICKY HEADER w/ Responsive Animation
	https://codepen.io/rikschennink/pen/yZYbwQ?editors=0010
	 */

	const debounce = (fn) => {
		let frame;
		return (...params) => {
			if (frame) {
				cancelAnimationFrame(frame);
			}
			frame = requestAnimationFrame(() => {
				fn(...params);
			});
		};
	};
	const storeScroll = () => {
		document.documentElement.dataset.scroll = window.scrollY;
	};
	document.addEventListener('scroll', debounce(storeScroll), { passive: true });
	storeScroll();


	return (
		<header className='header-container'>
			<div class='header-left'>LOGO</div>
			<div class='header-right'>
				{' '}
				<Link to='#'>About</Link>
				<Link to='#'>Members</Link>
				<Link to='#'>The Cache</Link>
				<Link to='#'>Services</Link>
				<Link to='#'>Contact</Link>
			</div>
		</header>
	);
};

export default Header;
