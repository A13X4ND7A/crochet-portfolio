import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import {useParams} from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import Sidebar from './Sidebar';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const {slug} = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"authorName": author->name,
			'authorImage': author->image
		}`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singlePost) return <div>Loading..</div>;

	return (
		<>
			<main className='bg-primary-light min-h-screen '>
				<Sidebar />
				<section className='container mx-auto px-2'>
					<article className='shadow-lg bg-primary-light rounded-lg'>
						<header className='relative'>
							<div className='absolute h-full w-full flex items-center justify-center'>
								<div className='bg-crochetGreen-dark bg-opacity-75 rounded p-12'>
									<h1 className='text-2xl lg:text-6xl mb-4 text-primary-light font-thin uppercase'>{singlePost.title}</h1>
								</div>
							</div>
							<img src={singlePost.mainImage.asset.url} alt={singlePost.title} className='w-full object-cover rounded-t' style={{height: '400px'}} />
						</header>
						<div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
							<BlockContent blocks={singlePost.body} projectId='z8knuzzo' dataset='production' />
							<div className='flex justify-center text-gray-800'>
								<img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className='w-10 h-10 rounded-full' />
								<p className=' flex items-center pl-2 text-small text-crochetGreen-light'>Posted By {singlePost.authorName}</p>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}
