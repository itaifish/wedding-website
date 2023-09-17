const PrettyLink = (props: { url: string; text: string; altColor?: string; hoverColor?: string; newTab?: boolean }) => {
	const color = `text-${props.altColor ?? 'secondary'}`;
	const hoverColor = `text-${props.hoverColor ?? 'white'}`;
	return (
		<a
			href={props.url}
			className={`font-medium ${color} dark:${color} underline dark:hover:${hoverColor}`}
			target={props.newTab ? '__blank' : ''}
		>
			{props.text}
		</a>
	);
};

export default PrettyLink;
