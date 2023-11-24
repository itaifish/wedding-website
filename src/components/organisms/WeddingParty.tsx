import { links } from '../molecules/Header';
import Section from '../molecules/Section';
import KateyPicture from '../../assets/wedding-party/Katey.jpg';
import RaePicture from '../../assets/wedding-party/Raelyssa.jpg';
import MossPicture from '../../assets/wedding-party/Moss.jpg';
import LydiaPicture from '../../assets/wedding-party/Lydia.jpg';
import SophiePicture from '../../assets/wedding-party/Sophie.jpg';
import BenPicture from '../../assets/wedding-party/Ben.png';
import ShanePicture from '../../assets/wedding-party/Shane.jpg';

import { Card } from '../molecules/Card';

const weddingParty = [
	{
		name: 'Katey Clausen',
		pic: KateyPicture,
		bio: 'Katey met Janae in middle school and the two became fast friends, stuck at the hip through high school, soccer, clubs, and more! Katey resides in Harrisburg, NC, enjoys writing, trivia nights, working out, and works from home for a framing startup. Fun fact: Janae and Katey have been in the same group chat since 2012!',
	},
	{
		name: 'Raelyssa Gamara',
		pic: RaePicture,
		bio: "This is Raelyssa, the maid of honor and sister of the bride. She's looked up to Janae her whole life and watched her grow and blossom into the woman she is today. She has nothing but admiration for her older sister and hopes to one day achieve as much as she has. ",
	},
	{
		name: "Shane O'Connor",
		pic: ShanePicture,
		bio: "Having known Itai for twenty years, Shane has had the privilege to watch him grow up, going from a precocious young boy with an endless appetite for learning into a courageous young man whose future seems brighter by the day. Still maintaining a close friendship even after all these years, Shane looks forward to seeing Itai continue to realize his untapped potential, and is eager to celebrate the new milestone in his good friend's life.",
	},
	{
		name: 'Ben Meadows',
		pic: BenPicture,
		bio: "Hello! I'm Ben and I'm proud to say I've known Itai since the 6th grade. I've learned so many things from Itai over the years; how to play basketball, and when to at least try and catch a friend who's falling. He simultaneously taught me how to come to terms with losing and the game of chess. He started my entire career as a software developer, as he's the person who taught me how to code. Most importantly, Itai has taught me what it means to be not only a good person, but also a good friend. And believe it or not, I'm still learning from him today. He and Janae have also taught me what a happy, healthy, and so obviously in love couple ought to look like. I am equal parts proud, excited, relieved, and grateful to be the best man at what will undoubtedly be an amazing wedding!",
	},
	{
		name: 'Moss Rahman',
		bio: "Janae is one of my day-one friends at UNC. I first met her when she was on a video call with her parents, showing them her dorm. I knew we had a deep connection when we were at a restaurant together, and we ordered multiple appetizers. Without even saying anything, we both knew that it was okay for us to share the apps with each other. Ever since, we've been good friends, navgiating the ups and downs of life together. Like with any new partner to a close friend, I was initially skeptical of her new relationship; but the happiness and direction that I see in Janae has quelled all doubts, and I am honored to be a part of their wedding.",
		pic: MossPicture,
	},
	{
		name: 'Lydia Weinberger',
		pic: LydiaPicture,
		bio: 'Lydia met Janae through Spoken Word, and was introduced to Itai by her partner after he transferred to UNC. She has known the happy couple individually for five years, and is proud to say she introduced them! Lydia is currently located in Durham, where she lives with her partner, Ari, their cat, Stevie, and the various cursed objects she collects from thrift and vintage stores. ',
	},
	{
		name: 'Sophie Rivkin-Fish',
		pic: SophiePicture,
		bio: 'Hi my name is Sophie! I’ve known Itai since he was 4 years old, right after I was born. Because I am his sister. I didn’t think the day would come that he got married, and yet here we are…so mazel tov to Itai and Janae!!! I wish lots of good luck to Janae for the next 60 or so years of putting up with him. Remember to take deep breaths and don’t feed him peppers or cinnamon. He goes through phases with mushroom. Avoid discussing astrology or crystals and hold his hand while the airplane leaves for takeoff. That’s pretty much it. Cheers! ',
	},
] as const satisfies readonly { name: string; pic: string; bio: string }[];

const WeddingParty = () => {
	return (
		<Section
			link={links.party.to}
			title="Wedding Party"
			body={
				<>
					<div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
						{weddingParty.map((person) => (
							<Card title={person.name} body={person.bio} image={person.pic} />
						))}
					</div>
				</>
			}
		/>
	);
};

export default WeddingParty;
