import React from 'react';
import {SocialIcon} from 'react-social-icons';

export default function Sidebar() {
	return (
		<div className='flex m-4 pt-4 fixed bottom-0 z-50 lg:flex-col lg:top-20 lg:mt-20'>
			<SocialIcon url='https://github.com/A13X4ND7A' className=' mr-4 lg:mb-4 ' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
			<SocialIcon
				url='https://www.linkedin.com/in/alexandra-faller-8595873a/'
				className='mr-4 lg:mb-4 '
				target='_blank'
				fgColor='#fff'
				style={{height: 35, width: 35}}
			/>
			<SocialIcon url='https://twitter.com/A13X4ND7A' target='_blank' fgColor='#fff' style={{height: 35, width: 35}} />
		</div>
	);
}
