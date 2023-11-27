export interface TimelineProps {
	events: { name: string; description: string; tag?: string; icon?: JSX.Element; date: Date }[];
	type: 'time' | 'date';
}
export default function Timeline(props: TimelineProps) {
	return (
		<ol className="relative my-20 border-l border-gray-200 dark:border-gray-700">
			{props.events.map((event, index) => {
				return (
					<li className="mb-10 ml-6" key={index}>
						{event.icon && (
							<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
								{event.icon}
							</span>
						)}
						<h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
							{event.name}
							{event.tag && (
								<span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
									{event.tag}
								</span>
							)}
						</h3>
						<time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{props.type === 'date'
								? event.date.toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
								  })
								: event.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
						</time>
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
					</li>
				);
			})}
		</ol>
	);
}
