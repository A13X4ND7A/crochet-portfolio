import React from 'react';
import crochetImage from '../assets/images/olliss-7mJj0Boa4jc-unsplash.jpg';
export default function Home() {
	return (
		<main>
			<img
				src={crochetImage}
				alt='Photo by <a href="https://unsplash.com/@olliss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olliss</a> on <a href="https://unsplash.com/s/photos/crochet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  '
				className='absolute object-cover w-full h-full'
			/>
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
				<h1 className='text-6xl text-eggShell font-thin tracking-widest leading-none uppercase lg:leading-snug'>Alexandra's crochet</h1>
			</section>
		</main>
	);
}
