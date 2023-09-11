import FrequentlyAskedQuestions from '../organisms/FrequentlyAskedQuestions';
import LocationAndInfo from '../organisms/LocationAndInfo';
import OurStory from '../organisms/OurStory';
import RSVP from '../organisms/RSVP';
import Header from './Header';

export default function Body() {
	return (
		<div className="relative bg-neutral">
			<Header />
			<OurStory />
			<LocationAndInfo />
			<RSVP />
			<FrequentlyAskedQuestions />
		</div>
	);
}
