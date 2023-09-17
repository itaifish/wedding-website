import PrettyLink from '../atoms/PrettyLink';
import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const location = <PrettyLink url={`#${links.location.to}`} text={'The Location'} altColor="primary" />;

const questionsAndAnswers: { question: string; answer: string | JSX.Element }[] = [
	{
		question: 'What is the dress code?',
		answer:
			'We are opting to not have a specific dress code because we want all of our guests to feel comfortable in whatever they decide to wear! It is possible that many people will decide to dress semi-formal. Please no white dresses. ',
	},
	{
		question: 'Will the ceremony, cocktail hour, and reception take place indoors or outdoors?',
		answer: (
			<>
				Parts of the ceremony, cocktail hour, and reception may take place both indoors and outdoors. For more
				information, please see {location} section of our website.
			</>
		),
	},
	{
		question: 'What is the weather like in NC in December?',
		answer: 'terrible',
	},
	{
		question: 'What will the wedding-day timeline look like?',
		answer: 'For a specific wedding-day timeline, please see the Event Itinerary section of our website!',
	},
	{
		question: 'How can I get to the wedding venue? Will transportation be provided?',
		answer: (
			<>
				Please see {location} for more details about the wedding venue, and information about transportation to and from
				the venue.
			</>
		),
	},
	{
		question: 'Is there parking available at the wedding venue?',
		answer: <>Yes! For more information, please see {location} section of our website</>,
	},
	{
		question: 'Can I bring my kids?',
		answer:
			'We have chosen The Graham Mill as our wedding venue for our special day! Unfortunately, one of the venue’s rules is that children must be accompanied by an adult; this adult is not allowed to consume alcohol while the children are at the venue.',
	},
	{
		question: 'What type of food and drink will be served during the cocktail hour and reception?',
		answer: '',
	},
	{
		question: 'Will there be an open bar?',
		answer:
			'We will be providing a variety of wines and beers for adults who wish to drink alcohol after the wedding ceremony.  Unfortunately, we will be unable to provide cocktails or other mixed drinks for cocktail hour and the reception.  The wines and beers, however, will be prepaid.',
	},
	{
		question: 'Can I take pictures during the ceremony to post on social media?',
		answer: (
			<>
				Yes! If you would like to tag the bride, she can be found on Instagram as @writerafjanae or{' '}
				<PrettyLink
					url={'https://www.instagram.com/janaesjourneys/'}
					text={'@janaesjourneys'}
					altColor="primary"
					newTab={true}
				/>
			</>
		),
	},
	{
		question: 'Can I bring my gift to the wedding?',
		answer:
			'Your presence is present enough! Should you wish to bring a gift to our wedding, there will be a gift table for your convenience.',
	},
	{
		question: 'When will the reception end? Will there be an after-party?',
		answer: '',
	},
	{
		question: '',
		answer: '',
	},
];

const FrequentlyAskedQuestions = () => {
	return (
		<Section
			link={links.faq.to}
			title="Frequently Asked Questions"
			body={
				<>
					{questionsAndAnswers.map((QandA, index) => (
						<div key={index}>
							<p className="my-5 dark:text-primary">
								<b>Q:</b> {QandA.question}
							</p>
							<p className="my-5 text-base dark:text-secondary">
								<b>A:</b> {QandA.answer}
							</p>
						</div>
					))}
				</>
			}
		/>
	);
};

export default FrequentlyAskedQuestions;
