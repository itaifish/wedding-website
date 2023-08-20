import Timeline, { TimelineProps } from '../atoms/Timeline';
import Globe from '../atoms/icons/Globe';
import { links } from '../molecules/Header';

const events: TimelineProps['events'] = [
	{
		name: 'Janae and Itai meet',
		description: 'Janae and Itai meet at Wordsmiths, a UNC poetry club. ',
		date: new Date('15 Oct 2019 08:45:00 GMT'),
		icon: <Globe fill="#7BAFD4" />,
	},
];

export default function OurStory() {
	return (
		<div id={links.story.to} className="mt-1.5">
			<Timeline events={events} />
		</div>
	);
}
