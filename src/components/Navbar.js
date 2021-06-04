import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../assets/images/cp.svg';

export default function Navbar() {
	return (
		<header className='bg-primary-light shadow-lg sticky top-0 z-50 w-full'>
			<div className='container mx-auto flex justify-between py-6'>
				<nav className='flex'>
					<NavLink to='/' exact className=''>
						<img className='h-100 py-0 px-2' src={logo} alt='Planet Crochet' />
					</NavLink>
					<NavLink to='/post' exact activeClassName='navActive' className='navStyling hover:border-b-4 border-crochetGreen-dark '>
						Blog
					</NavLink>
					<NavLink to='/project' activeClassName='navActive' className='navStyling'>
						Projects
					</NavLink>
					<NavLink to='/about' activeClassName='navActive' className='navStyling'>
						About
					</NavLink>
				</nav>
			</div>
		</header>
	);
}
