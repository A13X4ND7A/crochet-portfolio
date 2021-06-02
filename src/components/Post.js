import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from '../client.js';

export default function Post() {
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
			)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);

	return (
		<main className='bg-blueGrey min-h-screen p-12'>
			<section className='container mx-auto'>
				<h1 className='text-5xl flex justify-center text-eggShell uppercase font-thin'>Blog!</h1>
				<h2 className='text-lg text-deepChampagne flex justify-center mb-12'>Learn all about crochet in my blog</h2>
				<section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{postData &&
						postData.map((post, index) => (
							<article key={index}>
								<Link to={'/post/' + post.slug.current} key={post.slug.current}>
									<span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-terracotta-dark' key={index}>
										<img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full h-full rounded-r object-cover absolute' />
										<span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
											<h3 className='text-lg font-normal capitalize px-3 py-4 bg-terracotta-dark text-eggShell bg-opacity-75 rounded'>{post.title}</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
