import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
	Button,
	Card,
	Checkbox,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core/';
import { SignUpPageProps } from '../../types';

const SignUpPage = ({ createAccount }: SignUpPageProps): JSX.Element => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		userAgreed: false,
	});

	return (
		<SplitPage>
			<TitleHalf>
				<Typography variant="h2" color="textPrimary">
					Dash.
				</Typography>
			</TitleHalf>
			<FormHalf>
				<StyledTitleContainer>
					<Typography variant="h4" gutterBottom>
						Create an account
					</Typography>
					<Typography gutterBottom>Create an account to use dash.</Typography>
				</StyledTitleContainer>
				<StyledCard>
					<Grid container justifyContent="space-between">
						<StyledTextField
							label="firstName"
							variant="filled"
							type="text"
							margin="normal"
							value={form.firstName}
							onChange={event =>
								setForm({ ...form, firstName: event.target.value })
							}
						/>
						<StyledTextField
							label="Last Name"
							variant="filled"
							margin="normal"
							value={form.lastName}
							onChange={event =>
								setForm({ ...form, lastName: event.target.value })
							}
						/>
					</Grid>
					<TextField
						label="Email"
						variant="filled"
						type="email"
						fullWidth
						margin="normal"
						value={form.email}
						onChange={event => setForm({ ...form, email: event.target.value })}
					/>
					<TextField
						label="Password"
						variant="filled"
						type="password"
						fullWidth
						margin="normal"
						value={form.password}
						onChange={event =>
							setForm({ ...form, password: event.target.value })
						}
					/>
					<TextField
						label="Confirm Password"
						variant="filled"
						type="password"
						fullWidth
						margin="normal"
						value={form.confirmPassword}
						onChange={event =>
							setForm({ ...form, confirmPassword: event.target.value })
						}
					/>
					<Grid container justifyContent="flex-start" alignItems="center">
						<Checkbox
							name="userAgreed"
							onChange={event =>
								setForm({ ...form, userAgreed: event.target.checked })
							}
						/>
						<Typography variant="body2" display="inline">
							I agree with{' '}
							<a href="https://www.google.com" target="_blank" rel="noreferrer">
								terms and conditions
							</a>
						</Typography>
					</Grid>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => createAccount(form)}
					>
						Create Account
					</Button>
				</StyledCard>
			</FormHalf>
		</SplitPage>
	);
};

export default SignUpPage;

const SplitPage = styled.div`
	display: flex;
	flex-direction: row;
`;

const TitleHalf = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.CYAN[9]};
	height: 100vh;
`;

const FormHalf = styled.form`
	width: 100%;
`;

const StyledCard = styled(Card)`
	width: 325px;
	margin: 0 auto;
	padding: 30px;
`;

const StyledTextField = styled(TextField)`
	width: 150px;
`;

const StyledTitleContainer = styled.div`
	max-width: 385px;
	margin: 0 auto;
`;
