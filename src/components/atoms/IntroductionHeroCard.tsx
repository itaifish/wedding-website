import heroImage from '../../assets/itai_janae_hero.png';
import Body from '../molecules/Body';

const IntroductionHeroCard = () => {
	return (
		<>
			<div
				className="min-w-screen hero min-h-screen bg-base-200"
				style={{
					background: `url(${heroImage}) center top`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Welcome</h1>
						<p className="py-6">Thanks for joining us as we celebrate our wedding! Click below to get started.</p>
						<a href="#nextStep" className="btn btn-primary">
							Get Started
						</a>
					</div>
				</div>
			</div>
			<div id="nextStep">
				<Body></Body>
			</div>
		</>
	);
};

export default IntroductionHeroCard;
