import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: { colors: {} },
	},
	daisyui: {
		themes: [
			{
				wedding: {
					primary: '#7BAFD4',

					secondary: '#E2BD8C',

					accent: '#1fb2a6',

					neutral: '#2a323c',

					'base-100': '#1d232a',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#f87272',
				},
			},
		],
	},
	plugins: [daisyui, typography],
};
