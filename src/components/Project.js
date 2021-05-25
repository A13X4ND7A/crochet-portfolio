import React, {useState, useEffect} from 'react';
import sanityClient from '../client';

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
            }`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<main className='bg-blueGrey min-h-screen p-12'>
			<section className='container mx-auto'>
				<h1 className='text-5xl flex justify-center text-eggShell uppercase font-thin'>Project!</h1>
				<h2 className='text-lg text-deepChampagne flex justify-center mb-12'>My Projects page</h2>
				<section className='grid grid-cols-2 gap-8'>
					{projectData &&
						projectData.map((project, index) => (
							<article className='relative rounded-lg shadow-xl bg-white p-16'>
								<h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>{project.title}</h3>

								<div className='text-gray-500 text-xs space-x-4'>
									<span>
										<strong className='font-bold'>Yarn Used: </strong>
										{project.yarnType}
									</span>
									<span>
										<strong className='font-bold'>Hook Size: </strong> {project.hookSize}
									</span>
									<span>
										<strong className='font-bold'>Type:</strong> {project.projectType}
									</span>
									<p className='my-6 text-lg text-gray-700 leading-relaxed'>{project.description}</p>
									<span>
										<a href={project.url} alt={project.title} target='_blank' rel='noopener noreferrer'>
											Find the Pattern here
										</a>
									</span>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
