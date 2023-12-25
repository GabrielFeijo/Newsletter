import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				stats: "url('/desktop.svg')",

				'linear-color': 'linear-gradient(to right, #FD5278,#FF693F )',
			},
			colors: {
				'primary-color': '#262942',
				'secondary-color': '#FF624F',
				'input-color': '#ccc',
			},
			borderColor: {
				'primary-color': '#262942',
				'input-color': '#ccc',
			},
		},
	},
	plugins: [],
};
export default config;
