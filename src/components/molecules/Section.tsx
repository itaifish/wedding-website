import { FunctionComponent } from 'react';

interface SectionProps {
	title: string;
	link: string;
	body: JSX.Element;
}

const Section: FunctionComponent<SectionProps> = (props) => {
	return (
		<div id={props.link} className="mx-auto w-1/2 py-20">
			<h2 className="mx-auto my-5 text-4xl font-extrabold dark:text-white">{props.title}</h2>
			{props.body}
		</div>
	);
};

export default Section;
