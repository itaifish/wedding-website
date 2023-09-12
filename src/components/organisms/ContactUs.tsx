import PrettyLink from '../atoms/PrettyLink';
import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const ContactUs = () => {
	return (
		<Section
			link={links.contact.to}
			title="Contact Us"
			body={
				<>
					<p className="my-5 text-base dark:text-white">
						Questions? Concerns? Just wanna chat? Here's how you can reach out:
					</p>
					<ul className="list-none">
						<li>By Phone:</li>
						<li>
							<ul className="list-disc">
								<li>Itai: 919-636-9028</li>
								<li>Janae: 910-960-7494</li>
							</ul>
						</li>
						<li>By Email:</li>
						<li>
							<ul className="list-disc">
								<li>
									<PrettyLink url="mailto:janaeitai@gmail.com" text="janaeitai@gmail.com"></PrettyLink>
								</li>
							</ul>
						</li>
					</ul>
				</>
			}
		/>
	);
};

export default ContactUs;
