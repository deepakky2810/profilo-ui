import { createTheme } from "@material-ui/core/styles";

const pxToRem = (px) => `${px / 18.018}rem`;
const spacing = (value) => `${pxToRem(value)}`;
const pxToVh = (px, portHeight = 940) => `${(px * 100) / portHeight}vh`;
const pxToVw = (px, portWidth = 1920) => `${(px * 100) / portWidth}vw`;

const DarkTheme = createTheme({
	palette: {
		primary: {
			// immap Guideline
			main: "rgba(255, 255, 255, 1)",
			grey: "#6d6e71",
		},
		secondary: {
			// #AAAAAA
			main: "rgba(255, 255, 255, 1)",
			grey: "#a0a2a8",
		},
		common: {
			// #FFFFFF
			white: "rgba(255,255,255,1)",
			// #000000
			black: "rgba(0,0,0,1)",
		},
		background: {
			// #273D49
			default: "rgba(39, 61, 73, 0.8)",
			// #58687E , #39495E
			main: "radial-gradient(rgba(88, 104, 126, 1), rgba(57, 73, 94, 1))",
			// #2A3F4D
			paper: "rgb(39, 61, 73, 1)",
			// #223746
			level1: "rgba(34, 55, 70, 1)",
			// #283A46
			level2: "rgba(40, 58, 70, 1)",
			// #21303B
			level3: "rgba(33, 48, 59, 1)",
		},

		text: {
			// immap Guideline
			primary: "rgba(255,255,255,1)",
			// #C0C6CA
			secondary: "rgba(192, 198, 202, 1)",
			// #97A1A9
			disabled: "rgba(151, 161, 169, 1)",
		},
		// #1A262F
		divider: "rgba(26, 38, 47, 1)",

		action: {
			// #000000
			backDrop: "rgba(0, 0, 0, 0.75)",
			// immapGrey
			selected: "#6d6e71",
		},
		success: {
			// #8FD163
			main: "rgba(143, 209, 99, 1)",
		},
		info: {
			// #14AFF1
			main: "rgba(20, 175, 241, 1)",
		},
		warning: {
			// #F4B400
			main: "rgba(244, 180, 0, 1)",
		},
		error: {
			// #FF5B5B
			main: "rgba(255, 91, 91, 1)",
		},
	},
	spacing,
	typography: {
		pxToVh,
		pxToVw,
		pxToRem,
		fontWeightLight: 300,
		fontWeightMedium: 500,
		fontWeightRegular: 400,
		immapPrimary: {
			main: "Barlow, sans-serif",
			condensed: "'Barlow Condensed', sans-serif",
		},
		immapSecondary: {
			main: "'Crimson Pro', serif",
		},
		h1: {
			fontSize: pxToRem(48),
			fontWeight: 500,
		},
		h2: {
			fontSize: pxToRem(38),
			fontWeight: 500,
		},
		h3: {
			fontSize: pxToRem(36),
			fontWeight: 300,
		},
		h4: {
			fontSize: pxToRem(28),
			fontWeight: 400,
		},
		h5: {
			fontSize: pxToRem(24),
			fontWeight: 400,
		},
		h6: {
			fontSize: pxToRem(22),
			fontWeight: 400,
		},
		body1: {
			fontSize: pxToRem(20),
			fontWeight: 400,
		},
		body2: {
			fontSize: pxToRem(18),
			fontWeight: 400,
		},
		subtitle1: {
			fontSize: pxToRem(16),
			fontWeight: 400,
		},
		subtitle2: {
			fontSize: pxToRem(16),
			fontWeight: 400,
			lineHeight: 1.7,
		},
		caption: {
			fontSize: pxToRem(16),
			fontWeight: 400,
			fontFamily: "Barlow,sans-serif",
		},
		button: {
			fontSize: pxToRem(20),
			fontWeight: 400,
		},
		overline: {
			fontSize: pxToRem(14),
			textTransform: "none",
		},
		fontFamily: "Barlow,sans-serif",
	},
	border: {
		fine: {
			primary: `${pxToRem(1)} solid #5DAAE0`,
			secondary: `${pxToRem(1)} solid #FFFFFF`,
			main: `${pxToRem(1)} solid`,
		},
	},
	status: {
		// My business variables
		safe: "#5FC32C",
		safe2: "#CFFFB5",
		warning: "#FF8888",
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				body: {
					backgroundColor: "#000000",
					backgroundImage: "linear-gradient(147deg, #000000 0%, #120C03 74%)",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
					width: pxToVw(1920),
					height: pxToVh(940),
					overflow: "hidden",
				},
			},
		},
		MuiListItemText: {
			root: {
				margin: pxToRem(5),
			},
		},
		MuiGrid: {
			item: {
				display: "flex",
			},
			root: {
				height: "max-content",
			},
		},
		MuiIconButton: {
			root: {
				margin: pxToRem(5),
				padding: "0px",
			},
		},
		MuiOutlinedInput: {
			root: {
				"&:hover": {
					border: "none",
				},
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
				"&.Mui-error .MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
				"&:hover .MuiOutlinedInput-notchedOutline": {
					border: "none",
				},
			},
			input: {
				padding: `${pxToRem(0)} ${pxToRem(15)} ${pxToRem(3)} ${pxToRem(15)}`,
			},
			notchedOutline: {
				"&:hover": {
					border: "none",
				},
				"&.Mui-focused": {
					border: "none",
				},
			},
		},
		MuiButton: {
			text: {
				padding: "0px",
			},
			root: {
				"&.Mui-disabled": {
					color: "#6d6e71", // immap grey
				},
			},
		},
		PrivateSwitchBase: {
			root: {
				padding: 0,
			},
		},
	},
});

export default DarkTheme;
