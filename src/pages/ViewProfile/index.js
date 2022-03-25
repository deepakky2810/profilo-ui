/* eslint-disable no-extra-boolean-cast */
import React from "react";
import styled from "styled-components";
import { makeStyles, Typography, Grid, Avatar, IconButton } from "@material-ui/core";
import facebookIcon from "@Src/assets/images/facebook.png";
import githubIcon from "@Src/assets/images/github.svg";
import instagramIcon from "@Src/assets/images/instagram.png";
import LinkedinIcon from "@Src/assets/images/linkedin.svg";
import { useSelector } from "react-redux";

const ViewProfileModalWrapper = styled.div``;
const WorkExperiencWrapper = styled.div``;
const PersonalDetailsWrapper = styled.div`
	display: flex;
`;
const IconsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const useStyles = makeStyles((theme) => ({
	informationWrapperStyles: {
		marginTop: theme.typography.pxToRem(20),
	},
	avatarStyles: {
		height: theme.typography.pxToRem(100),
		width: theme.typography.pxToRem(100),
		border: "1px solid white",
	},
	bigHeaderTextStyles: {
		...theme.typography.h2,
		lineHeight: "1.2",
	},
	externalProfileButtonStyles: {
		height: theme.typography.pxToRem(24),
		width: theme.typography.pxToRem(24),
	},
	workExpWrapperStyle: {
		marginTop: theme.typography.pxToRem(20),
	},
	workExperienceBodyWrapper: {
		overflowX: "hidden",
		overflowY: "auto",
		[theme.breakpoints.up("sm")]: {
			height: theme.typography.pxToRem(260),
		},
		[theme.breakpoints.down("sm")]: {
			height: theme.typography.pxToRem(200),
		},
	},
	workExperienceHeaderStyles: {
		color: theme.palette.secondary.grey,
		marginBottom: theme.typography.pxToRem(20),
	},
	companyLogoStyles: {
		maxHeight: theme.typography.pxToRem(55),
		maxWidth: theme.typography.pxToRem(150),
	},
	companyDetailsWrapperStyles: {
		flexDirection: "column",
		justifyContent: "space-between",
		height: theme.typography.pxToRem(100),
	},
	companyName: {
		color: theme.palette.secondary.grey,
	},
	marginTop10: {
		marginTop: theme.typography.pxToRem(10),
	},
}));

const ViewProfile = () => {
	const classes = useStyles();
	const { profileData, profileDataLoading } = useSelector((state) => state.modalDetails);

	const getName = () => {
		const { firstName, middleName, lastName } = profileData;
		return (
			firstName + (!!middleName ? ` ${middleName}` : "") + (!!lastName ? ` ${lastName}` : "")
		);
	};

	const getWorkDuration = (workExperience) => {
		const { startDate, endDate, presentlyWorking } = workExperience;
		return `${startDate?.substring(0, 10)} - ${
			presentlyWorking ? "Present" : endDate?.substring(0, 10)
		}`;
	};

	const getAge = () => {
		const ageDifMs = Date.now() - new Date(profileData.dob).getTime();
		const ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};

	if (profileDataLoading || !profileData) {
		return <div>Loading...</div>;
	}

	return (
		<ViewProfileModalWrapper>
			<PersonalDetailsWrapper>
				<Grid container spacing={5}>
					<Grid item xs={12} md={2} alignItems="center">
						<Avatar
							className={classes.avatarStyles}
							src={profileData.profilePictureUrl}
							alt="profilt-picture"
						/>
					</Grid>
					<Grid item xs={12} md={10} alignItems="center">
						<Typography variant="h4">
							Hello, I&apos;m&nbsp;&nbsp;
							<span className={classes.bigHeaderTextStyles}>{getName()}</span>
							&nbsp;&nbsp;and I&apos;m&nbsp;&nbsp;
							<span className={classes.bigHeaderTextStyles}>
								{`${getAge()} years`}
							</span>
							&nbsp;&nbsp;young.&nbsp;
						</Typography>
					</Grid>
				</Grid>
				<IconsWrapper>
					{!!profileData.facebookUrl && (
						<IconButton>
							<a href={profileData.facebookUrl} target="_blank">
								<img
									className={classes.externalProfileButtonStyles}
									src={facebookIcon}
									alt="facebookIcon"
								/>
							</a>
						</IconButton>
					)}
					{!!profileData.githubUrl && (
						<IconButton>
							<a href={profileData.githubUrl} target="_blank">
								<img
									className={classes.externalProfileButtonStyles}
									src={githubIcon}
									alt="githubIcon"
								/>
							</a>
						</IconButton>
					)}
					{!!profileData.instagramUrl && (
						<IconButton>
							<a href={profileData.instagramUrl} target="_blank">
								<img
									className={classes.externalProfileButtonStyles}
									src={instagramIcon}
									alt="instagramIcon"
								/>
							</a>
						</IconButton>
					)}
					{!!profileData.linkedinUrl && (
						<IconButton>
							<a href={profileData.linkedinUrl} target="_blank">
								<img
									className={classes.externalProfileButtonStyles}
									src={LinkedinIcon}
									alt="linkedinIcon"
								/>
							</a>
						</IconButton>
					)}
				</IconsWrapper>
			</PersonalDetailsWrapper>
			{profileData?.workExperiences?.length > 0 && (
				<WorkExperiencWrapper className={classes.workExpWrapperStyle}>
					<Typography variant="h4" className={classes.workExperienceHeaderStyles}>
						Work Experience
					</Typography>
					<Grid container spacing={10} className={classes.workExperienceBodyWrapper}>
						{profileData.workExperiences.map((workExperience) => (
							<Grid key={workExperience.workExperienceId} item xs={12} md={6}>
								<Grid container spacing={3}>
									<Grid item xs={8} direction="column">
										<Grid container>
											<Grid item xs={3}>
												<Typography
													variant="subtitle2"
													className={classes.companyName}
												>
													Company:
												</Typography>
											</Grid>
											<Grid item xs={9}>
												<Typography variant="subtitle2">
													{workExperience.company}
												</Typography>
											</Grid>
											<Grid item xs={3}>
												<Typography
													variant="subtitle2"
													className={classes.companyName}
												>
													Title:
												</Typography>
											</Grid>
											<Grid item xs={9}>
												<Typography variant="subtitle2">
													{workExperience.jobTitle}
												</Typography>
											</Grid>
											<Grid item xs={3}>
												<Typography
													variant="subtitle2"
													className={classes.companyName}
												>
													Duration:
												</Typography>
											</Grid>
											<Grid item xs={9}>
												<Typography variant="subtitle2">
													{getWorkDuration(workExperience)}
												</Typography>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={4} justifyContent="flex-end">
										{!!workExperience.companyLogoUrl && (
											<img
												className={classes.companyLogoStyles}
												src={workExperience.companyLogoUrl}
												alt="company-logo"
											/>
										)}
									</Grid>
									<Grid
										item
										xs={12}
										alignItems="center"
										className={classes.marginTop10}
									>
										<Typography
											variant="subtitle1"
											className={classes.companyName}
										>
											Description
										</Typography>
									</Grid>
									<Grid item xs={12} alignItems="center">
										<Typography variant="subtitle1">
											{workExperience.jobDescription}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						))}
					</Grid>
				</WorkExperiencWrapper>
			)}
		</ViewProfileModalWrapper>
	);
};

export default ViewProfile;
