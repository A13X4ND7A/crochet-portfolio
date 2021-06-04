import React, {useState} from 'react';

export default function Lightbox({passingImages}) {
	const [imageToShow, setImageToShow] = useState('');
	const [altText, setAltText] = useState('');
	const [lightboxDisplay, setLightBoxDisplay] = useState(false);

	//maps over the images to display
	const imageCards = passingImages.map((image, index) => <img src={image.asset.url} alt={image.alt} key={index} onClick={() => showImage(image)} />);

	const showImage = (image) => {
		//set imageToShow to be the one thats clicked on
		setImageToShow(image.asset.url);
		setAltText(image.alt);
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

		const index = passingImages.findIndex((element) => {
			if (element.asset.url === imageToShow) {
				return true;
			} else {
				return false;
			}
		});

		//if the current index is -1 then there are no more images found and the lightbox should be closed otherwise add one to the index and set the image to the next image in the array
		if (index >= passingImages.length - 1) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = passingImages[index + 1];
			setImageToShow(nextImage.asset.url);
			setAltText(nextImage.alt);
		}
	};

	const showPrevious = (event) => {
		event.stopPropagation();

		const index = passingImages.findIndex((element, index) => {
			if (element.asset.url === imageToShow) {
				return true;
			}
		});
		if (index <= 0) {
			setLightBoxDisplay(false);
		} else {
			let nextImage = passingImages[index - 1];
			setImageToShow(nextImage.asset.url);
			setAltText(nextImage.alt);
		}
	};

	return (
		<>
			<div className='grid md:grid-cols-2 gap-2'>{imageCards}</div>

			{lightboxDisplay ? (
				<div onClick={hideLightBox} className='flex z-10 fixed top-0 left-0 w-full h-full bg-crochetGreen-dark bg-opacity-50 items-center justify-between'>
					<button className='absolute left-0' onClick={showPrevious}>
						⭠
					</button>

					<img className='' src={imageToShow} alt={altText}></img>

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
