/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Berlin", "sans-serif"],
			},
			colors: {
				"berlin-medium-blue": "#4f90cd",
				"berlin-black-10": "#e6e6e6",
				"berlin-black-40": "#999999",
				"berlin-red": "#E4001F",
				"berlin-gray": "#DDDDDDFF",
				"berlin-light-gray": "#EDEDEDFF",
				"berlin-lighter-gray": "#F5F5F5FF",
			},
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
};
