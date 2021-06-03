import React, {useState} from 'react';

export default function Lightbox({passingImages}) {
	//state to hide and show the image thats chosen
	const [imageToShow, setImageToShow] = useState('');
	//state to show and hide the lighbox
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);

	//maps over the images to display
	const imageCards = passingImages.map((image, index) => (
		<img src={image.asset.url} alt={image.alt} key={index} className=' flex justify-center align-center w-full' onClick={() => showImage(image.asset.url)} />
	));

	const showImage = (image) => {
		//set imageToShow to be the one thats clicked on
		setImageToShow(image);
		//set the lightbox visbaility to true
		setLightBoxDisplay(true);
	};

	//hide the lightBox
	const hideLightBox = () => {
		setLightBoxDisplay(false);
	};

	//show the next image
	const showNext = (event) => {
		event.stopPropagation();

		//get the index of the current image and then add one when next image is clicked to display the next image in the array
		// eslint-disable-next-line array-callback-return
		const index = passingImages.findIndex((element, index) => {
			if (element.asset.url === imageToShow) {
				return true;
			}
		});
		console.log('the index is.... ' + index);
		console.log(passingImages);
		let nextImage = passingImages[index + 1].asset.url;
		console.log(nextImage);
		setImageToShow(nextImage);

		console.log(imageToShow);

		//if the current index is -1 then there are no more images found and the lightbox should be closed
		if (index >= passingImages.length - 1) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = passingImages[index + 1];
			setImageToShow(nextImage);
		}
	};

	const showPrevious = (event) => {
		event.stopPropagation();

		let currentIndex = passingImages.indexOf(imageToShow);
		if (currentIndex <= 0) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = passingImages[currentIndex - 1];
			setImageToShow(nextImage);
		}
	};

	return (
		<>
			<div className='grid md:grid-cols-2 gap-2'>{imageCards}</div>

			{lightboxDisplay ? (
				<div onClick={hideLightBox} className='flex z-10 fixed top-0 left-0 w-full h-full bg-terracotta bg-opacity-50 items-center justify-between'>
					<button className='absolute left-0' onClick={showPrevious}>
						⭠
					</button>

					<img className='' src={imageToShow} alt={imageToShow}></img>

					<button className='absolute right-0' onClick={showNext}>
						⭢
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
}
