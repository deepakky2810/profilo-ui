import { createTheme, makeStyles } from "@material-ui/core/styles";
import theme from "@Utils/themes/DarkTheme";

const datePickerThemeDark = createTheme({
	overrides: {
		MuiFilledInput: {
			input: {
				padding: 0,
			},
			root: {
				backgroundColor: "transparent",
			},
		},
		MuiPopover: {
			root: { marginTop: theme.typography.pxToRem(8) },
			display: "flex",
			paper: {
				border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
				borderRadius: theme.typography.pxToRem(5),
				"&:hover": {
					border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
				},
			},
		},
		MuiPickersStaticWrapper: {
			staticWrapperRoot: {
				display: "flex",
				boxSizing: "border-box",
				minWidth: 0,
				border: `${theme.typography.pxToRem(1)} solid ${theme.palette.secondary.dark}`,
				width: "18.1vw",
				height: "40vh",
				borderRadius: `${theme.typography.pxToRem(5)}`,
				marginTop: "1vh",
			},
		},
		MuiPickersToolbarButton: {
			toolbarBtn: {
				padding: theme.spacing(1, 5),
				margin: theme.spacing(2),
				minWidth: theme.typography.pxToRem(16),
				border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
				borderRadius: theme.typography.pxToRem(4),
				"&:hover": {
					border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
				},
			},
		},
		MuiPickersToolbar: {
			toolbar: {
				display: "flex",
				backgroundColor: theme.palette.background.level1,
				height: "7vh",
				minHeight: theme.typography.pxToRem(48),
				padding: `${theme.typography.pxToRem(15)} ${theme.typography.pxToRem(18)}`,
			},
		},
		MuiPickersToolbarText: {
			toolbarTxt: {
				color: theme.palette.text.primary,
				...theme.typography.subtitle2,
			},
		},
		MuiPickersYearSelection: {
			container: {
				height: theme.typography.pxToVh(300),
				width: "112%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
			},
		},
		MuiPickersYear: {
			root: {
				height: theme.typography.pxToVh(40),
				width: "max-content",
				...theme.typography.body2,
			},
			yearSelected: {
				margin: `${theme.typography.pxToVh(10)} 0`,
				...theme.typography.body1,
			},
		},
		MuiPickersCalendarHeader: {
			dayLabel: {
				color: theme.palette.common.white,
				fontFamily: theme.typography.fontFamily,
				...theme.typography.body2,
				width: theme.typography.pxToRem(23),
				margin: `0 ${theme.typography.pxToRem(3)}`,
			},
			switchHeader: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				...theme.typography.body2,
			},
			iconButton: {
				color: theme.palette.text.primary,
				padding: theme.typography.pxToRem(2),
				background: "transparent !important",
				"&.Mui-disabled": {
					color: "transparent !important",
				},
			},
			daysHeader: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			},
			transitionContainer: {
				height: theme.typography.pxToRem(30),
				width: theme.typography.pxToRem(150),
				minHeight: "0px",
			},
		},
		MuiTypography: {
			body1: {
				color: "white",
				fontSize: theme.typography.pxToRem(20),
				fontWeight: "500",
			},
			body2: {
				color: "white",
				fontSize: theme.typography.pxToRem(18),
			},
			subtitle1: {
				color: "white",
				fontSize: theme.typography.pxToRem(18),
			},
			colorPrimary: {
				color: theme.palette.primary.main,
			},

			"&:hover": {
				backgroundColor: theme.palette.primary.main,
			},
			h4: {
				fontSize: theme.typography.pxToRem(24),
				lineHeight: 1.17,
			},
		},
		MuiButton: {
			textPrimary: {
				color: theme.palette.primary.main,
			},
			text: {
				margin: `0 ${theme.typography.pxToRem(4)}`,
				padding: `${theme.typography.pxToRem(6)} ${theme.typography.pxToRem(8)}`,
			},
			root: {
				minWidth: theme.typography.pxToRem(64),
			},
		},
		MuiButtonBase: {
			root: {
				marginLeft: "0 !important",
			},
		},
		MuiPickersDay: {
			day: {
				color: theme.palette.common.white,
				height: theme.typography.pxToRem(27),
				width: theme.typography.pxToRem(26),
				margin: `0 ${theme.typography.pxToRem(3)}`,
				"& > span > *": {
					...theme.typography.body2,
					fontFamily: theme.typography.fontFamily,
				},
			},
			selected: {
				backgroundColor: theme.palette.primary.main,
			},
			current: {
				color: theme.palette.primary.main,
			},
			daySelected: {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.common.black,
				"&:hover": {
					backgroundColor: theme.palette.primary.main,
				},
				borderRadius: theme.typography.pxToRem(4),
				"& > span > *": {
					...theme.typography.body2,
					fontWeight: 500,
					fontFamily: theme.typography.fontFamily,
				},
			},
			dayDisabled: {
				color: theme.palette.common.white,
				opacity: "0.45",
			},
		},
		MuiFormHelperText: {
			error: {
				color: `${theme.palette.text.primary} !important`,
				marginBottom: ".8vh",
			},
		},
		MuiPickersCalendar: {
			transitionContainer: {
				height: theme.typography.pxToVh(200),
				minHeight: "0px",
				margin: theme.spacing(10, 0, 25, 0),
			},
		},
		MuiPickersBasePicker: {
			pickerView: {
				minWidth: 0,
				minHeight: 0,
				maxWidth: "unset",
				maxHeight: "unset",
				background: "#120C03",
				overflow: "hidden",
				padding: theme.spacing(2, 5),
				width: theme.typography.pxToRem(250),
				justifyContent: "flex-start",
			},
		},
		MuiPickersModal: {
			dialog: {
				borderBottom: 0,
				minHeight: "27.777vh",
				overflow: "hidden",
			},
			dialogRoot: {
				border: `${theme.typography.pxToRem(1)} solid ${theme.border.fine.primary}`,
				minHeight: "unset",
				maxHeight: "unset",
				minWidth: "unset",
				maxWidth: "unset",
				height: "fit-content",
				width: "21vw",
			},
			dialogAction: {
				color: theme.palette.primary.main,
			},
		},
		MuiDialogActions: {
			root: {
				margin: "0",
				borderTop: 0,
				padding: 0,
				paddingTop: "2vh",
			},
		},
		MuiInputBase: {
			input: {
				cursor: "pointer",
				padding: `${theme.typography.pxToRem(0)} ${theme.typography.pxToRem(
					15
				)} ${theme.typography.pxToRem(3)} ${theme.typography.pxToRem(15)}`,
				...theme.typography.subtitle1,
			},
		},
		MuiInputAdornment: {
			positionStart: {
				marginRight: 0,
			},
		},
		MuiSvgIcon: {
			fontSizeSmall: {
				fontSize: "1.066rem",
			},
		},
		MuiPickersDatePickerRoot: {
			toolbar: {
				backgroundColor: "#120C03",
				height: "max-content",
			},
		},
		MuiPickersSlideTransition: {
			transitionContainer: {
				"& > *": {
					...theme.typography.body2,
					fontFamily: theme.typography.fontFamily,
				},
			},
		},
	},
	shape: {
		borderRadius: theme.typography.pxToRem(10),
	},
	palette: {
		background: {
			paper: theme.palette.background.level3,
		},
		action: {
			disabled: theme.palette.text.primary,
		},
		text: {
			secondary: theme.palette.text.primary,
		},
	},
});

export default datePickerThemeDark;

export const useCalendarStyles = makeStyles((providedTheme) => ({
	inputFieldText: {
		width: theme.typography.pxToVw(300),
		padding: "0px",
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: providedTheme.typography.pxToRem(18),
		color: providedTheme.palette.text.primary,
		opacity: 1,
	},
	isDisabled: {
		color: providedTheme.palette.common.white,
		opacity: 0.5,
	},
	cardIcon: {
		color: `${theme.palette.info.main} !important`,
		height: theme.typography.pxToRem(21),
		width: theme.typography.pxToRem(21),
		cursor: "pointer",
		marginLeft: theme.typography.pxToRem(10),
		marginRight: theme.typography.pxToRem(10),
	},
	customisedErrorMessageStyles: {
		color: `${providedTheme.status.warning} !important`,
		opacity: "1 !important",
	},
	divText: {
		padding: `${providedTheme.typography.pxToRem(2)} ${providedTheme.typography.pxToRem(2)}`,
	},
	loadingCont: {
		height: providedTheme.typography.pxToVh(350),
		width: providedTheme.typography.pxToVw(300),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	progress: {
		height: providedTheme.typography.pxToRem(48),
		width: providedTheme.typography.pxToRem(48),
	},
	calendarContainer: {
		border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.grey}`,
		borderRadius: theme.shape.borderRadius,
		display: "flex",
		justifyContent: "space-between",
		margin: `${theme.spacing(5)} 0px`,
		alignItems: "center",
		"&:hover": {
			border: `${theme.typography.pxToRem(2)} solid ${theme.palette.primary.main}`,
		},
	},
	startButtonGrid: {
		paddingRight: "0.5rem",
	},
	endButtonGrid: {
		paddingLeft: "0.5rem",
	},
	dateButton: {
		color: "#9CA4AF",
	},
	dateGrid: {
		color: providedTheme.palette.common.white,
		border: `${providedTheme.typography.pxToRem(1)} solid ${
			providedTheme.palette.secondary.dark
		}`,
		borderRadius: providedTheme.typography.pxToRem(4),
		padding: providedTheme.typography.pxToRem(10),
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
	},
	selectedDateGrid: {
		color: providedTheme.palette.common.white,
		border: `${providedTheme.typography.pxToRem(1)} solid ${
			providedTheme.palette.primary.main
		}`,
		borderRadius: providedTheme.typography.pxToRem(4),
		padding: providedTheme.typography.pxToRem(10),
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
	},
	calendar: {
		display: "flex",
		marginTop: providedTheme.typography.pxToVh(10),
	},
}));
