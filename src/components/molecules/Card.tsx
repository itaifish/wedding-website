interface CardProps {
	title: string;
	image: string;
	body: string;
}

export function Card(props: CardProps) {
	return (
		<div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
			<img className="w-sm ml-auto mr-auto max-h-96 rounded-t-lg" src={props.image} alt="Card Image" />
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.body}</p>
			</div>
		</div>
	);
}
