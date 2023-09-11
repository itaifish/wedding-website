import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const FrequentlyAskedQuestions = () => {
	return (
		<Section
			link={links.faq.to}
			title="Frequently Asked Questions"
			body={<p className="my-5 text-base dark:text-white"></p>}
		/>
	);
};

export default FrequentlyAskedQuestions;
