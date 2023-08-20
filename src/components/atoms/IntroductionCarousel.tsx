import image1 from '../../assets/carousel/PhotosPNG/IMG_0726.png';
import image2 from '../../assets/carousel/PhotosPNG/IMG_0727.png';
import image3 from '../../assets/carousel/PhotosPNG/IMG_0728.png';
import image4 from '../../assets/carousel/PhotosPNG/IMG_0729.png';
import image5 from '../../assets/carousel/PhotosPNG/IMG_0730.png';
import image6 from '../../assets/carousel/PhotosPNG/IMG_0731.png';
import image7 from '../../assets/carousel/PhotosPNG/IMG_0732.png';
import image8 from '../../assets/carousel/PhotosPNG/IMG_0733.png';
import image9 from '../../assets/carousel/PhotosPNG/IMG_0734.png';
import image10 from '../../assets/carousel/PhotosPNG/IMG_0735.png';
import image11 from '../../assets/carousel/PhotosPNG/IMG_0736.png';
import image12 from '../../assets/carousel/PhotosPNG/IMG_0737.png';
import image13 from '../../assets/carousel/PhotosPNG/IMG_0738.png';
import image14 from '../../assets/carousel/PhotosPNG/IMG_0739.png';
import image15 from '../../assets/carousel/PhotosPNG/IMG_0740.png';
import image16 from '../../assets/carousel/PhotosPNG/IMG_0740.png';
import image17 from '../../assets/carousel/PhotosPNG/IMG_0741.png';
import image18 from '../../assets/carousel/PhotosPNG/IMG_0742.png';
import image19 from '../../assets/carousel/PhotosPNG/IMG_0743.png';
import image20 from '../../assets/carousel/PhotosPNG/IMG_0744.png';
import image21 from '../../assets/carousel/PhotosPNG/IMG_0745.png';
import image22 from '../../assets/carousel/PhotosPNG/IMG_0746.png';

const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
	image21,
	image22,
];

const IntroductionCarousel = () => {
	return (
		<>
			<div className="slide carousel-center carousel carousel-vertical rounded-box space-x-4 bg-neutral p-4">
				{images.map((image, index) => (
					<div
						id={index === images.length - 1 ? 'carousel_final' : `carousel_${index}`}
						className="carousel-item"
						key={index}
					>
						<img src={image} className="rounded-box" alt={`Itai_And_Janae_In_Denmark_${index}`} />
					</div>
				))}
			</div>
		</>
	);
};

export default IntroductionCarousel;
