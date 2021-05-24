import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

export default function Navbar() {
	return (
		<header className='bg-terracotta'>
			<div className='container mx-auto flex justify-between'>
				<nav className='flex'>
					<NavLink to='/' exact activeClassName='navActive' className=' mr-4 text-4xl tracking-widest navStyling py-6 font-thin'>
						AlexFaller
					</NavLink>
					<NavLink to='post' activeClassName='navActive' className='navStyling py-3'>
						Blog Posts
					</NavLink>
					<NavLink to='project' activeClassName='navActive' className='navStyling py-3'>
						Projects
					</NavLink>
					<NavLink to='about' activeClassName='navActive' className='navStyling py-3'>
						About Me!
					</NavLink>
				</nav>
				<div className='inline-flex py-3 px-3 my-6'>
					<SocialIcon url='https://github.com/A13X4ND7A' className=' mr-4 ' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
					<SocialIcon
						url='https://www.linkedin.com/in/alexandra-faller-8595873a/'
						className=' mr-4 '
						target='_blank'
						fgColor='#fff'
						style={{height: 35, width: 35}}
					/>
					<SocialIcon url='https://twitter.com/A13X4ND7A' className=' mr-4 ' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
				</div>
			</div>
		</header>
	);
}
