import React from 'react';
import SignUpPage from './components/SignUpPage/SignUpPage';
import { SignUpPageProps } from './types';

const SignUp = ({ createAccount }: SignUpPageProps): JSX.Element => (
	<SignUpPage createAccount={createAccount} />
);

export default SignUp;
