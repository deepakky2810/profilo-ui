import { makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment-timezone";
import DatePicker from "./DatePicker";

const useStyles = makeStyles((theme) => ({
	bigCalendarContainer: {
		height: theme.typography.pxToRem(40),
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			maxWidth: theme.typography.pxToVw(400),
		},
		minWidth: theme.typography.pxToVw(350),
	},
	calendarInputOverride: {
		fontSize: theme.typography.pxToRem(18),
	},
}));

export const getDateFormatReplaceMapper = (dateFormatId = "MMM dd, yyyy") => {
	const dateFromatMapper = {
		"dd MMM yyyy": "MMM dd yyyy",
		"dd/MM/yyyy": "MM/dd/yyyy",
		"MMM DD, YYYY - HH:mm": "MMM DD, YYYY - HH:mm",
		"dd-MM-yyyy": "MM-dd-yyyy",
		"DD-MMM-YYYY": "MMM-DD-YYYY",
		"MMM DD, YYYY  HH:mm:ss": "MMM dd, yyyy  hh:mm:ss",
		"MMM dd, yyyy": "MMM dd, yyyy",
		"MM/DD/YY": "MM/dd/yyyy",
		"MM-dd-yyyy": "MM-dd-yyyy",
		"yyyy-MM-dd": "yyyy-MM-dd",
		"yyyy-MM-dd-dbSent": "yyyy-MM-dd",
		"MMM DD, YYYY": "MMM DD, YYYY",
		"dd-MMM-yyyy": "MMM-dd-yyyy",
	};

	return dateFromatMapper[dateFormatId];
};

export const getTimeInSQLFormattedTimestamp = (time) => {
	if (!time) return null;
	return moment(time).format("YYYY-MM-DD HH:mm:ss");
};

const BigDatePicker = (props) => {
	const { selectedDatee, setSelectedDate } = props;
	const classes = useStyles();
	const [openDatePicker, setOpenDatePicker] = React.useState(false);
	// getTimeInSQLFormattedTimestamp(value)
	return (
		<DatePicker
			autoOk
			format={getDateFormatReplaceMapper()}
			selectedDate={selectedDatee}
			handleDateChange={setSelectedDate}
			overrideClasses={{ root: classes.bigCalendarContainer }}
			inputProps={{
				classes: { input: classes.calendarInputOverride },
				onClick: () => setOpenDatePicker(!openDatePicker),
			}}
			PopoverProps={{
				anchorOrigin: { horizontal: "right", vertical: "top" },
				transformOrigin: { horizontal: "left", vertical: "bottom" },
			}}
			variant="inline"
			propOpenState
			propOpen={openDatePicker}
			propOpenChangeFunc={() => setOpenDatePicker(!openDatePicker)}
			onClose={() => {
				setOpenDatePicker(false);
			}}
			displayCustomizedErrorMessage
			renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) =>
				React.cloneElement(dayComponent, {
					autoId: "userProfile-setStartDate-MonthDate",
				})
			}
		/>
	);
};

BigDatePicker.propTypes = {
	selectedDatee: PropTypes.object.isRequired,
	setSelectedDate: PropTypes.func.isRequired,
};

export default BigDatePicker;
