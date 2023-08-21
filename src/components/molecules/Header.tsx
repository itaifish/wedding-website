import { HeartIcon } from '../atoms/icons/Heart';

export const links = {
	story: {
		to: 'story',
		label: 'Our Story',
	},
	location: {
		to: 'location',
		label: 'Location and Info',
	},
	rsvp: {
		to: 'rsvp',
		label: 'RSVP',
	},
	faq: {
		to: 'faq',
		label: 'Frequently Asked Questions',
	},
};

export default function Header() {
	return (
		<header className="sticky left-0 top-0 z-[100]">
			<div className="mx-auto">
				<nav className="absolute z-10 mb-10 w-full border-b  border-black/5 bg-base-100 dark:border-white/5 lg:border-transparent">
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
						<div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
							<a href="/#home" aria-label="logo" className="flex items-center space-x-2">
								<div aria-hidden="true" className="flex space-x-1">
									<HeartIcon fill={'#7BAFD4'} />
								</div>
								<span className="text-2xl font-bold text-gray-900 dark:text-white">Itai & Janae</span>
							</a>

							<div className="relative flex max-h-10 items-center lg:hidden">
								<button aria-label="humburger" id="hamburger" className="relative -mr-6 p-6">
									<div
										aria-hidden="true"
										id="line"
										className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
									></div>
									<div
										aria-hidden="true"
										id="line2"
										className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
									></div>
								</button>
							</div>
						</div>
						<div
							id="navLayer"
							aria-hidden="true"
							className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
						></div>
						<div
							id="navlinks"
							className="invisible absolute left-0 top-full z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
						>
							<div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
								<ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
									{Object.values(links).map((link) => (
										<li>
											<a
												href={`/#${link.to}`}
												className="block transition hover:text-primary dark:hover:text-white md:px-4"
											>
												<span>{link.label}</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
