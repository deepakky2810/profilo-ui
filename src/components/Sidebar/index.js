import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, withTheme } from "@material-ui/core";
import { styled as muiStyled } from "@material-ui/core/styles";

import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { LEFT_COMPONENT_WIDTH } from "@Src/utils/globalConstants";
import clsx from "clsx";
import { useModalConfig } from "./configs";

const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

const CustomListItemIcon = muiStyled(withTheme(ListItemIcon))((props) => ({
	width: props.theme.typography.pxToVw(LEFT_COMPONENT_WIDTH.CLOSED),
	minWidth: props.theme.typography.pxToVw(LEFT_COMPONENT_WIDTH.CLOSED),
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: props.theme.palette.primary.main,
}));

const useStyles = makeStyles((theme) => ({
	testStyles: {
		fontFamily: theme.typography.immapPrimary.main,
	},
	listItemStyles: {
		"&$focusVisible": {
			backgroundColor: theme.palette.action.selected,
		},
		"&$selected, &$selected:hover": {
			backgroundColor: theme.palette.action.selected,
		},
		"&:hover": {
			backgroundColor: theme.palette.action.selected,
		},
		"&$disabled": {
			opacity: 0.5,
		},
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	const sidebarConfig = useModalConfig();

	return (
		<SidebarWrapper>
			<List disablePadding component="nav">
				{sidebarConfig.map(
					(item) =>
						!item.hidden &&
						item.id >= 0 && (
							<ListItem
								key={item.label}
								className={clsx(classes.listItemStyles, ...item.classes)}
								disableGutters
								button
								onClick={item.onClickHandler}
							>
								<CustomListItemIcon>{item.icon}</CustomListItemIcon>
								<ListItemText
									primaryTypographyProps={{
										variant: "body2",
										classes: classes.textStyles,
										noWrap: true,
									}}
									primary={item.label}
								/>
							</ListItem>
						)
				)}
			</List>
			<List disablePadding component="nav">
				{sidebarConfig.map(
					(item) =>
						!item.hidden &&
						item.id < 0 && (
							<ListItem
								key={item.label}
								className={clsx(classes.listItemStyles, ...item.classes)}
								disableGutters
								button
								onClick={item.onClickHandler}
							>
								<CustomListItemIcon>{item.icon}</CustomListItemIcon>
								<ListItemText
									primaryTypographyProps={{
										variant: "body2",
										classes: classes.textStyles,
										noWrap: true,
									}}
									primary={item.label}
								/>
							</ListItem>
						)
				)}
			</List>
		</SidebarWrapper>
	);
};

export default Sidebar;
