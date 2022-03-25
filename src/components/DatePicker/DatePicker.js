import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { PropTypes } from "prop-types";
import clsx from "clsx";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { MuiPickersUtilsProvider, DatePicker as MUIDatePicker } from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import datePickerThemeDark, { useCalendarStyles } from "./theme";

const addErrorMessageProps = (
	isFormatCorrect,
	isPastDate,
	minDateRequired,
	displayCustomizedErrorMessage
) => {
	if (displayCustomizedErrorMessage) {
		if (!isFormatCorrect) {
			return { value: "INVALID_INPUT_MESSAGE_SUGGESTED_ACTIONS" };
		}
		if (isPastDate && minDateRequired) {
			return { value: "INVALID_DATE_MESSAGE_SUGGESTED_ACTIONS" };
		}
	}
	return {};
};

// to set customized error message
const makeHelperTextNull = (displayCustomizedErrorMessage) => {
	if (displayCustomizedErrorMessage) {
		return { helperText: null };
	}
	return {};
};

const DatePicker = (props) => {
	const {
		selectedDate,
		handleDateChange,
		minDateRequired,
		id,
		inputTextStyle,
		displayCustomizedErrorMessage,
		minDate,
		propOpen,
		propOpenState,
		propOpenChangeFunc,
		removeButton,
		overrideClasses,
		onMonthChange,
		...restProps
	} = props;
	const defaultClasses = useCalendarStyles();
	const [open, setOpen] = React.useState(false);
	const leftArrowRef = React.useRef(null);
	const [, setNewMonth] = React.useState(null);
	const [formatAndPastDate, setFormatAndPastDate] = React.useState({
		isFormatCorrect: false,
		isPastDate: false,
	});

	const dateFormatChecker = (date) =>
		date &&
		Object.prototype.toString.call(date) === "[object Date]" &&
		!Number.isNaN(date.getTime());

	const pastDateChecker = (date, minimumDate) =>
		date.setHours(0, 0, 0, 0) < minimumDate.setHours(0, 0, 0, 0);

	React.useEffect(() => {
		const isFormatCorrect = dateFormatChecker(selectedDate);
		let isPastDate = false;
		if (isFormatCorrect && minDateRequired) {
			isPastDate = pastDateChecker(selectedDate, minDate);
		}
		setFormatAndPastDate({
			isFormatCorrect,
			isPastDate,
		});
	}, [id]);

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div className={clsx(defaultClasses.calendarContainer, overrideClasses?.root)}>
				<MuiThemeProvider theme={datePickerThemeDark}>
					<MUIDatePicker
						open={propOpenState ? propOpen : open}
						allowKeyboardControl={Boolean(true)}
						id="date-picker"
						hintText="Choose Date"
						container="inline"
						inputStyle={{ textAlign: "center" }}
						InputProps={{
							id,
							className: clsx(
								inputTextStyle,
								defaultClasses.inputTextStyle,
								defaultClasses.inputFieldText,
								defaultClasses.borderSecond,
								displayCustomizedErrorMessage &&
									(!formatAndPastDate.isFormatCorrect ||
										formatAndPastDate.isPastDate) &&
									defaultClasses.customisedErrorMessageStyles,
								overrideClasses?.inputFieldStyles
							),
							readOnly: Boolean(true),
							onClick: () => setOpen(true),
							disableUnderline: Boolean(true),
							...addErrorMessageProps(
								formatAndPastDate.isFormatCorrect,
								formatAndPastDate.isPastDate,
								minDateRequired,
								displayCustomizedErrorMessage
							),
						}}
						classes={{
							isDisabled: clsx(defaultClasses.isDisabled),
						}}
						value={selectedDate}
						onChange={handleDateChange}
						onClose={() => {
							if (propOpenState) propOpenChangeFunc();
							else setOpen(false);
						}}
						leftArrowButtonProps={{
							ref: leftArrowRef,
						}}
						onMonthChange={(date) => {
							onMonthChange(date);
							setNewMonth(date);
						}}
						animateYearScrolling={false}
						{...makeHelperTextNull(displayCustomizedErrorMessage)}
						disableFuture
						{...restProps}
					/>
				</MuiThemeProvider>
				{!removeButton && (
					<DateRangeIcon
						className={clsx(defaultClasses.cardIcon, overrideClasses?.iconStyles)}
						onClick={() => {
							if (propOpenState) propOpenChangeFunc();
							else setOpen(true);
						}}
						alt="Calendar"
						role="presentation"
					/>
				)}
			</div>
		</MuiPickersUtilsProvider>
	);
};

DatePicker.defaultProps = {
	minDateRequired: false,
	overrideClasses: {},
	displayCustomizedErrorMessage: false,
	inputTextStyle: {},
	minDate: new Date(),
	maxDate: new Date(),
	propOpenState: false,
	propOpen: false,
	propOpenChangeFunc: () => {},
	removeButton: false,
	onMonthChange: () => {},
};

DatePicker.propTypes = {
	minDateRequired: PropTypes.bool,
	overrideClasses: PropTypes.object,
	selectedDate: PropTypes.any.isRequired,
	handleDateChange: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	displayCustomizedErrorMessage: PropTypes.bool,
	inputTextStyle: PropTypes.object,
	minDate: PropTypes.any,
	maxDate: PropTypes.any,
	propOpenState: PropTypes.bool,
	propOpen: PropTypes.bool,
	propOpenChangeFunc: PropTypes.func,
	removeButton: PropTypes.bool,
	onMonthChange: PropTypes.func,
};

export default DatePicker;
