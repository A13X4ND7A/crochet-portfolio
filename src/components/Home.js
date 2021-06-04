import React from 'react';
import crochetImage from '../assets/images/paula-heckathorn-0yz1EnvfMfw-unsplash.jpg';
import Sidebar from './Sidebar';
export default function Home() {
	return (
		<>
			<main>
				<Sidebar />
				<img src={crochetImage} alt='Olliss on Unsplash' className='absolute object-cover w-full h-full' />
				<section className='relative flex justify-center pt-12 md:pt-64 lg:pt-64 px-8'>
					<h1 className='bg-primary-light bg-opacity-40 px-2 py-2 rounded text-2xl text-brown font-thin tracking-widest leading-none uppercase md:text-4xl md:leading-snug lg:text-6xl  lg:leading-snug '>
						Crochet Out of this world!
					</h1>
				</section>
			</main>
		</>
	);
}
