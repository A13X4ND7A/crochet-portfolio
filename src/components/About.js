import React, {useEffect, useState} from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import yarnImage from '../assets/images/paul-hanaoka-4nabmlliGdU-unsplash.jpg';
import Sidebar from './Sidebar';
const builder = imageUrlBuilder(sanityClient);
function urlForAuthor(source) {
	return builder.image(source);
}

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'author']{
			name,
			bio,
			'authorImage': image.asset->url
		}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);

	if (!author) return <div>Loading...</div>;
	return (
		<>
			<img src={yarnImage} alt='Olliss on Unsplash' className='absolute object-cover w-full h-full' />
			<Sidebar />

			<main className=''>
				<div className='p-4 lg:pt-48 container mx-auto relative'>
					<section className='bg-crochetGreen-dark bg-opacity-90 rounded-lg shadow-2xl lg:flex p-8 shadow-lg'>
						<img alt={author.name} src={urlForAuthor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' />
						<div className='flex flex-col'>
							<h1 className='text-3xl text-primary-light mb-4'>
								Hello! I am <span className='text-crochetGreen-light text-center font-thin lg:text-left'>{author.name}</span>
							</h1>
							<div className='prose lg:prose-xl text-primary-light'>
								<BlockContent blocks={author.bio} projectId='z8knuzzo' dataset='production' />
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
