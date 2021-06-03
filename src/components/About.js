import React, {useEffect, useState} from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import yarnImage from '../assets/images/paul-hanaoka-4nabmlliGdU-unsplash.jpg';
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
		<main className='relative bg-brown'>
			<img src={yarnImage} alt='Paul Hanaoka on Unsplash' className='absolute w-full' />
			<div className='p-16 lg:pt-48 container mx-auto relative'>
				<section className='bg-terracotta bg-opacity-90 rounded-lg shadow-2xl lg:flex p-20'>
					<img alt={author.name} src={urlForAuthor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' />
					<div className='text-lg flex flex-col justify-center'>
						<h1 className='text-6xl text-eggShell mb-4'>
							Hello. I am <span className='text-blueGrey'>{author.name}</span>
						</h1>
						<div className='prose lg:prose-xl text-white'>
							<BlockContent blocks={author.bio} projectId='z8knuzzo' dataset='production' />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
