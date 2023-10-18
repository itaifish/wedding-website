import ContactUs from '../organisms/ContactUs';
import EventItinerary from '../organisms/EventItinerary';
import FrequentlyAskedQuestions from '../organisms/FrequentlyAskedQuestions';
import GiftsAndRegistry from '../organisms/GiftsAndRegistry';
import LocationAndInfo from '../organisms/LocationAndInfo';
import OurStory from '../organisms/OurStory';
import RSVP from '../organisms/RSVP';
import WeddingParty from '../organisms/WeddingParty';
import Header from './Header';

export default function Body() {
	return (
		<div className="relative bg-neutral">
			<Header />
			<OurStory />
			<LocationAndInfo />
			<RSVP />
			<FrequentlyAskedQuestions />
			<WeddingParty />
			<EventItinerary />
			<GiftsAndRegistry />
			<ContactUs />
		</div>
	);
}
