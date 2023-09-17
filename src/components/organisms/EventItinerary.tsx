import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const EventItinerary = () => {
	return (
		<Section
			link={links.event.to}
			title="Event Itinerary"
			body={
				<>Please check back in here as we approach the wedding date. The final schedule is still being determined. </>
			}
		/>
	);
};

export default EventItinerary;
