import GrahamMillMap from '../atoms/GrahamMillMap';
import PrettyLink from '../atoms/PrettyLink';
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
						<PrettyLink url="https://thegrahammill.com/" text="The Graham Mill" newTab={true} /> in Graham, North
						Carolina on December 21ˢᵗ 2021. We have a block of rooms at the{' '}
						<PrettyLink
							url={'https://www.marriott.com/en-us/hotels/rdufm-fairfield-inn-and-suites-mebane/overview/'}
							text="Fairfield Inn & Suites Mebane"
						/>
						. Reservation link is here:{' '}
						<PrettyLink
							url="https://www.marriott.com/event-reservations/reservation-link.mi?id=1697832541095&key=GRP&app=resvlink"
							text="https://www.marriott.com/event-reservations/reservation-link.mi?id=1697832541095&key=GRP&app=resvlink"
						/>
					</p>

					<GrahamMillMap />
				</>
			}
		/>
	);
};

export default LocationAndInfo;
