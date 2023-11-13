import PrettyLink from '../atoms/PrettyLink';
import { links } from '../molecules/Header';
import Section from '../molecules/Section';

const GiftsAndRegistry = () => {
	return (
		<Section
			link={links.gifts.to}
			title="Gifts and Registry"
			body={
				<>
					<p className="my-5 text-white">
						Just your presence is enough presents(hah!) for us. However, should you decide to give us a gift, we have a
						Crate & Barrel, Amazon and Target registry, and would also be happy to accept cash. It is Jewish custom to
						give{' '}
						<PrettyLink
							newTab
							url={
								'https://www.chabad.org/library/article_cdo/aid/484894/jewish/What-is-the-reason-giving-money-in-multiples-of-18.htm'
							}
							text={'multiples of 18'}
						/>{' '}
						to celebrate life. We would also be honored if you donated to a good cause in our name.
					</p>
					<ul>
						<li>
							<PrettyLink
								newTab
								url="https://www.crateandbarrel.com/gift-registry/janae-gamara/r6817044"
								text="Crate & Barrel Registry"
							/>
						</li>
						<li>
							<PrettyLink
								newTab
								url={'https://www.target.com/gift-registry/gift/janaeanditai'}
								text={'Target Registry'}
							/>
						</li>
						<li>
							<PrettyLink newTab url={'https://www.amazon.com/wedding/share/janaeitai'} text={'Amazon Registry'} />
						</li>
					</ul>
				</>
			}
		/>
	);
};

export default GiftsAndRegistry;
