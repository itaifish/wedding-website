import GrahamMillMap from '../atoms/GrahamMillMap';
import { links } from '../molecules/Header';

const LocationAndInfo = () => {
	return (
		<div id={links.location.to} className="mx-auto w-1/2 py-20">
			<h2 className="mx-auto my-5 text-4xl font-extrabold dark:text-white">Location and Info</h2>
			<p className="my-5 text-base dark:text-white">
				The wedding will be held at{' '}
				<a href="https://thegrahammill.com/" className="font-medium text-secondary hover:underline">
					The Graham Mill
				</a>{' '}
				in Graham, North Carolina on December 21ˢᵗ 2021.
			</p>
			<GrahamMillMap />
		</div>
	);
};

export default LocationAndInfo;
