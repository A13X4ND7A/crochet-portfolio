import React from 'react';
import crochetImage from '../assets/images/olliss-7mJj0Boa4jc-unsplash.jpg';
export default function Home() {
	return (
		<main>
			<img src={crochetImage} alt='Olliss on Unsplash' className='absolute object-cover w-full h-full' />
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
				<h1 className='text-6xl text-eggShell font-thin tracking-widest leading-none uppercase lg:leading-snug'>Alexandra's crochet</h1>
			</section>
		</main>
	);
}
