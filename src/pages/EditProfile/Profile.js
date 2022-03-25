/* eslint-disable no-extra-boolean-cast */
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Typography, Grid, TextareaAutosize, useTheme, Checkbox } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { BigTextField, SmallTextField } from "@Src/components/TextField";
import { SmallButton } from "@Src/components/Button";
import { BigDatePicker, SmallDatePicker } from "@Src/components/DatePicker";
import { PropTypes } from "prop-types";
import { useEditProfileStyles } from "./editProfileStyles";
import { useCache } from "./editProfileUtils";
import PictureUploader from "./PictureUploader";
import SimpleLogoUploader from "./SimpleLogoUploader";

const EditProfileModalWrapper = styled.div``;
const WorkExperiencWrapper = styled.div``;
const PersonalDetailsWrapper = styled.div`
	display: flex;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10%;
`;

const Profile = ({ initialCacheState, mode }) => {
	const theme = useTheme();
	const classes = useEditProfileStyles();
	const firstNameRef = React.useRef(null);
	const { cache, ...cacheUtils } = useCache(initialCacheState);
	const userEmail = useSelector((state) => state.auth.email);

	React.useEffect(() => firstNameRef.current.focus(), []);

	return (
		<EditProfileModalWrapper className={classes.editProfileModalWrapper}>
			<Header>
				<Typography variant="h4">{`${mode} Profile`}</Typography>
				<div classes={classes.headerRightSction}>
					<SmallButton
						className={classes.marginLeft10}
						onClick={cacheUtils.handleSaveProfileDetails}
					>
						Save Changes
					</SmallButton>
					<SmallButton
						className={classes.marginLeft10}
						onClick={cacheUtils.handleResetProfileDetails}
					>
						Reset
					</SmallButton>
				</div>
			</Header>
			<div className={classes.scrollWrapper}>
				<div className={classes.scrollWidthAdjust}>
					<PersonalDetailsWrapper>
						<Grid container spacing={5}>
							<Grid item xs={12} alignItems="center">
								<PictureUploader
									profilePictureUrl={cache.profilePictureUrl}
									setProfilePictureUrl={cacheUtils.handleChangeProfilePictureUrl}
								/>
							</Grid>
							<Grid item xs={12} alignItems="center">
								<Grid container justifyContent="space-between">
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													First Name{" "}
													<span
														style={{ color: theme.palette.error.main }}
													>
														*
													</span>
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.firstName}
													inputRef={firstNameRef}
													error={
														cache.firstName === "" &&
														document.activeElement !==
															firstNameRef.current
													}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"firstName",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Middle Name
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.middleName}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"middleName",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Last Name
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.lastName}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"lastName",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} alignItems="center">
								<Grid container justifyContent="space-between">
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Date of Birth{" "}
													<span
														style={{ color: theme.palette.error.main }}
													>
														*
													</span>
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigDatePicker
													selectedDatee={cache.dob}
													setSelectedDate={(value) =>
														cacheUtils.setCache({
															...cache,
															dob: value,
														})
													}
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Email
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField value={userEmail} disabled />
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Github
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.githubUrl}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"githubUrl",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} alignItems="center">
								<Grid container justifyContent="space-between">
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													LinkedIn
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.linkedinUrl}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"linkedinUrl",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Facebook
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.facebookUrl}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"facebookUrl",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
									<Grid item xs={12} md={3}>
										<Grid container>
											<Grid item xs={12}>
												<Typography noWrap variant="body2">
													Instagram
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<BigTextField
													value={cache.instagramUrl}
													onChange={(e) =>
														cacheUtils.handleInputChange(
															"instagramUrl",
															e.target.value
														)
													}
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</PersonalDetailsWrapper>
					<WorkExperiencWrapper>
						<Typography variant="h4" className={classes.workExperienceHeaderStyles}>
							Work Experience
						</Typography>
						<Grid container spacing={10} className={classes.workExperienceBodyWrapper}>
							{cache.workExperiences.map((workExperience, idx) => (
								<Grid
									key={workExperience.id}
									item
									xs={12}
									direction="column"
									className={classes.marginTop20}
								>
									<div className={classes.workExpToolbarWrapper}>
										<SmallButton
											className={classes.marginBottom10}
											onClick={() => cacheUtils.handleDeleteWorkExp(idx)}
										>
											Delete
										</SmallButton>
									</div>
									<Grid container spacing={3}>
										<Grid item xs={12} sm={6} direction="column">
											<Grid container alignItems="center">
												<Grid item xs={3}>
													<Typography
														variant="subtitle2"
														className={classes.companyName}
													>
														<span
															style={{
																color: theme.palette.error.main,
															}}
														>
															*
														</span>
														Company:
													</Typography>
												</Grid>
												<Grid item xs={7}>
													<SmallTextField
														value={cache.workExperiences[idx].company}
														onChange={(e) =>
															cacheUtils.handleChangeWorkExp(
																e,
																idx,
																"company"
															)
														}
													/>
												</Grid>
												<Grid item xs={3}>
													<Typography
														variant="subtitle2"
														className={classes.companyName}
													>
														<span
															style={{
																color: theme.palette.error.main,
															}}
														>
															*
														</span>
														Title:
													</Typography>
												</Grid>
												<Grid item xs={7}>
													<SmallTextField
														value={cache.workExperiences[idx].jobTitle}
														onChange={(e) =>
															cacheUtils.handleChangeWorkExp(
																e,
																idx,
																"jobTitle"
															)
														}
													/>
												</Grid>
												<Grid item xs={3}>
													<Typography
														variant="subtitle2"
														className={classes.companyName}
													>
														Duration:
													</Typography>
												</Grid>
												<Grid item xs={3} alignItems="center">
													<Typography
														variant="subtitle2"
														style={{
															marginRight:
																theme.typography.pxToRem(5),
														}}
													>
														From{" "}
														<span
															style={{
																color: theme.palette.error.main,
															}}
														>
															*
														</span>
													</Typography>
													<Typography variant="subtitle2">
														<SmallDatePicker
															selectedDatee={workExperience.startDate}
															setSelectedDate={(value) =>
																cacheUtils.handleWorkExpChangeDate(
																	value,
																	idx,
																	"startDate"
																)
															}
														/>
													</Typography>
												</Grid>
												<Grid item xs={1} justifyContent="center">
													<Typography variant="subtitle2">-</Typography>
												</Grid>
												<Grid item xs={3} alignItems="center">
													<Typography
														variant="subtitle2"
														style={{
															marginRight:
																theme.typography.pxToRem(5),
														}}
													>
														To
													</Typography>
													<Typography variant="subtitle2">
														<SmallDatePicker
															selectedDatee={workExperience.endDate}
															setSelectedDate={(value) =>
																cacheUtils.handleWorkExpChangeDate(
																	value,
																	idx,
																	"endDate"
																)
															}
														/>
													</Typography>
												</Grid>
												<Grid item xs={3}>
													<Typography
														variant="subtitle2"
														className={classes.companyName}
														style={{
															marginRight:
																theme.typography.pxToRem(5),
														}}
													>
														<span
															style={{
																color: theme.palette.error.main,
															}}
														>
															*
														</span>
														Presently working:
													</Typography>
												</Grid>
												<Grid item xs={7}>
													<Checkbox
														checked={workExperience.presentlyWorking}
														onChange={(e) =>
															cacheUtils.handleCheckboxWorkExp(
																e,
																idx,
																"presentlyWorking"
															)
														}
														icon={
															<CheckBoxOutlineBlankIcon
																className={classes.checkboxIcon}
															/>
														}
														checkedIcon={
															<CheckBoxIcon
																className={classes.checkboxIcon}
															/>
														}
														color="primary"
														inputProps={{
															"aria-label": "secondary checkbox",
														}}
													/>
												</Grid>
												<Grid item xs={3}>
													<Typography
														variant="subtitle2"
														className={classes.companyName}
													>
														Company Logo:
													</Typography>
												</Grid>
												<Grid item xs={7}>
													<SimpleLogoUploader
														setCompanyLogoUrl={(url) =>
															cacheUtils.handleChangeCompanyLogoUrl(
																url,
																idx
															)
														}
													/>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12} sm={6} direction="column">
											<Grid container>
												<Grid item xs={12}>
													<TextareaAutosize
														className={classes.textAreaStyles}
														minRows={8}
														maxRows={8}
														placeholder="Description *"
														value={
															cache.workExperiences[idx]
																.jobDescription
														}
														onChange={(e) =>
															cacheUtils.handleChangeWorkExp(
																e,
																idx,
																"jobDescription"
															)
														}
													/>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							))}
						</Grid>
						<SmallButton onClick={cacheUtils.handleAddNewWorkExp}>Add New</SmallButton>
					</WorkExperiencWrapper>
				</div>
			</div>
		</EditProfileModalWrapper>
	);
};

Profile.propTypes = {
	initialCacheState: PropTypes.object.isRequired,
	mode: PropTypes.oneOf(["Create", "Edit"]).isRequired,
};

export default Profile;
