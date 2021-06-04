import React, {useState, useEffect} from 'react';
import sanityClient from '../client';
import Lightbox from './Lightbox';
import Sidebar from './Sidebar';

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
                title,
                description,
                yarnType,
				hookSize,
				url,
				projectType,
				tags,
				projectImage[]{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<>
			<main className='bg-primary-light min-h-screen'>
				<Sidebar />
				<section className='container mx-auto'>
					<h1 className='text-5xl flex justify-center text-crochetGreen-dark uppercase font-thin py-4'>Projects!</h1>
					<h2 className='text-lg text-crochetGreen-light flex justify-center mb-12'>Check out some of my projects</h2>
					<section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{projectData &&
							projectData.map((project, index) => (
								<article key={index} className='relative rounded-lg shadow-xl bg-crochetGreen-dark bg-opacity-40 p-16'>
									<h3 className='text-crochetGreen-dark text-3xl font-thin mb-2'>{project.title}</h3>
									<div className='text-brown text-xs flex flex-col items-start'>
										<span>
											<strong className='font-bold'>Hook Size: </strong>
											{project.hookSize}
										</span>
										<span>
											<strong className='font-bold'>Type: </strong>
											{project.projectType}
										</span>
										<span>
											<strong className='font-bold'>Yarn Used: </strong>
											{project.yarnType}
										</span>
									</div>
									<p className='my-6 text-lg text-crochetGreen-dark leading-relaxed'>{project.description}</p>

									{project.url ? (
										<span className='patternShow my-4 block font-light uppercase text-center text-brown'>
											<a
												className='bg-crochetGreen-light rounded py-1 px-2 text-xs'
												href={project.url}
												alt={project.title}
												target='_blank'
												rel='noopener noreferrer'
											>
												Get the pattern here!
											</a>
										</span>
									) : (
										''
									)}

									<Lightbox passingImages={project.projectImage} />
								</article>
							))}
					</section>
				</section>
			</main>
		</>
	);
}
