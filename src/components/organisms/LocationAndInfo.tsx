import GrahamMillMap from '../atoms/GrahamMillMap';
import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const LocationAndInfo = () => {
	return (
		<Section
			link={links.location.to}
			title="Location and Info"
			body={
				<>
					<p className="my-5 text-base dark:text-white">
						The wedding will be held at{' '}
						<a href="https://thegrahammill.com/" className="font-medium text-secondary hover:underline">
							The Graham Mill
						</a>{' '}
						in Graham, North Carolina on December 21ˢᵗ 2021.
					</p>
					<GrahamMillMap />
				</>
			}
		/>
	);
};

export default LocationAndInfo;
