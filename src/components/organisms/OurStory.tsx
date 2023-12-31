import Timeline, { TimelineProps } from '../atoms/Timeline';
import { CakeIcon } from '../atoms/icons/Cake';
import { CalendarIcon } from '../atoms/icons/Calendar';
import { ChatIcon } from '../atoms/icons/Chat';
import { GlobeIcon } from '../atoms/icons/Globe';
import { HeartIcon } from '../atoms/icons/Heart';
import { HouseIcon } from '../atoms/icons/House';

import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const events: TimelineProps['events'] = [
	{
		name: 'First Meeting',
		description:
			'Janae and Itai meet at Wordsmiths, a UNC poetry club, during a poetry slam. Itai went to Wordsmiths with his close friends Lydia and Ari, with the former also being a Wordsmiths member.',
		date: new Date('11 Oct 2019'),
		icon: <GlobeIcon fill="#7BAFD4" />,
	},
	{
		name: 'First Date',
		description:
			'Janae and Itai go on their first date at Caroline Coffee shop. The food was lacking but the connection was real. It snowed ❅.',
		date: new Date('20 Feb 2020'),
		icon: <ChatIcon fill="#7BAFD4" />,
	},
	{
		name: 'Dating',
		description: 'Janae and Itai begin officially dating.',
		date: new Date('3 Mar 2020'),
		icon: <HeartIcon fill="#7BAFD4" />,
	},
	{
		name: 'Living Together',
		description: 'Janae and Itai move into the Booker Creek apartments together.',
		date: new Date('13 May 2021'),
		icon: <HouseIcon fill="#7BAFD4" />,
	},
	{
		name: 'Engaged',
		description:
			'Janae proposes to Itai with a custom Magic: The Gathering card and a petite jade ring. Itai responds with an emphatic yes.',
		date: new Date('1 Dec 2021'),
		icon: <CakeIcon fill="#7BAFD4" />,
	},
	{
		name: 'New House',
		description: 'Janae and Itai move into 1606 Abberly Place, their new Home.',
		date: new Date('30 Jun 2022'),
		icon: <HouseIcon fill="#7BAFD4" />,
	},
	{
		name: 'Married at Last',
		description: 'Janae and Itai will be married on December 21st, 2023!',
		date: new Date('21 Dec 2023'),
		icon: <CalendarIcon fill="#7BAFD4" />,
	},
];

export default function OurStory() {
	return (
		<>
			<Section link={links.story.to} title="Our Story" body={<Timeline events={events} type="date" />} />
		</>
	);
}
