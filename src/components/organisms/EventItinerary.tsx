import Timeline from '../atoms/Timeline';
import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const events = [
	{
		name: 'Arrival Window Begins',
		description: 'Guests will begin to arrive at this time.',
		date: new Date(2023, 11, 21, 16, 0),
	},
	{
		name: 'Ceremony',
		description: 'The wedding ceremony begins.',
		date: new Date(2023, 11, 21, 16, 30),
		tag: 'Ceremony Start',
	},
	{
		name: 'Cocktail Hour',
		description:
			'After the ceremony, we will head outside for cocktail hour and stacks, while the inside is set up for dining.',
		date: new Date(2023, 11, 21, 17, 15),
	},
	{
		name: 'Dinner',
		description:
			'Dinner will be served. Our caterer of choice is Sassool, which serves mediterranean food. There will be a wealth of vegetarian options.',
		date: new Date(2023, 11, 21, 18, 15),
		tag: 'Dinner',
	},
	{
		name: 'Toasts',
		description: 'As people eat, we will do the toasts.',
		date: new Date(2023, 11, 21, 19, 0),
	},
	{
		name: 'First Dance / Money Dance',
		description:
			'Janae and Itai will have their first Dance, which is the traditional Money Dance in Guamanian and Filipino culture. ',
		date: new Date(2023, 11, 21, 19, 30),
	},
	{
		name: 'Rejoicing the Bride and Groom (Freilich)',
		description: 'Assorted comedic routines.',
		date: new Date(2023, 11, 21, 19, 45),
	},
	{
		name: 'Horah Dance followed by Open Dance',
		description:
			'A Jewish celebratory dance where the Bridge and Groom are lifted onto chairs. Afterwords we will have open dance.',
		date: new Date(2023, 11, 21, 20, 0),
	},
	{
		name: 'Cake Cutting',
		description: 'The cake(s) will be cut, but open dance will not be interrupted.',
		date: new Date(2023, 11, 21, 20, 45),
		tag: 'Dessert',
	},
	{
		name: 'Exit',
		description: 'The wedding will come to an end.',
		date: new Date(2023, 11, 21, 22, 0),
	},
];
const EventItinerary = () => {
	const timeline = <Timeline events={events} type="time"></Timeline>;
	return <Section link={links.event.to} title="Event Itinerary" body={<>{timeline}</>} />;
};

export default EventItinerary;
