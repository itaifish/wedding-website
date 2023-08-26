import { links } from '../molecules/Header';

const LocationAndInfo = () => {
	return (
		<div id={links.location.to} className="mx-auto w-1/2 py-20">
			<h2 className="mx-auto text-4xl font-extrabold dark:text-white">Location and Info</h2>
		</div>
	);
};

export default LocationAndInfo;
