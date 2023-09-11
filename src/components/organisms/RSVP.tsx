import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const rsvpLink = `https://forms.gle/ya4wdpzhinCSvUo27`;

const RSVP = () => {
	return (
		<>
			<Section
				link={links.rsvp.to}
				title="RSVP"
				body={
					<p className="my-5 text-base dark:text-white">
						If you would like to RSVP, click{' '}
						<a href={rsvpLink} className="text-2xl font-medium text-secondary hover:underline">
							here
						</a>{' '}
						to fill out the google form. As soon as you recieve your save-the-date (or are otherwise invited) we invite
						you to RSVP.
					</p>
				}
			/>
		</>
	);
};

export default RSVP;
