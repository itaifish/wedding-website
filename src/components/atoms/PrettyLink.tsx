const PrettyLink = (props: { url: string; text: string }) => {
	return (
		<a href={props.url} className="font-medium text-secondary hover:underline">
			{props.text}
		</a>
	);
};

export default PrettyLink;
