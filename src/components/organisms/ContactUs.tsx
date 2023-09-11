import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const ContactUs = () => {
	return <Section link={links.contact.to} title="Contact Us" body={<>7</>} />;
};

export default ContactUs;
