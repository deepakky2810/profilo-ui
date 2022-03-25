export const SCREEN_WIDTH_IN_PX = 1920;
export const SCREEN_HEIGHT_IN_PX = 940;

export const USABLE_SCREEN_WIDTH_IN_PX = SCREEN_WIDTH_IN_PX - 90;
export const USABLE_SCREEN_HEIGHT_IN_PX = SCREEN_HEIGHT_IN_PX - 90;

export const LEFT_COMPONENT_WIDTH = { CLOSED: 90, OPEN: 270 };
export const RIGHT_COMPONENT_WIDTH = {
	CLOSED: USABLE_SCREEN_WIDTH_IN_PX - LEFT_COMPONENT_WIDTH.CLOSED,
	OPEN: USABLE_SCREEN_WIDTH_IN_PX - LEFT_COMPONENT_WIDTH.OPEN,
};

export const GOOGLE_CLIENT_ID =
	"367179660889-3r9bkq7eu3flp0c6eoapedr3ml7ncqgv.apps.googleusercontent.com";