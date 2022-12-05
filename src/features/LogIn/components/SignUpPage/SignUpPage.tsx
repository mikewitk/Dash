import { SignUpPageProps } from '../../types';

const SignUpPage = ({ createAccount }: SignUpPageProps): JSX.Element => {
	return (
		<div>
			Sign Up Page is great
			<button
				onClick={() => createAccount({ firstName: 'Mike', lastName: 'Witk' })}
			>
				Create Account
			</button>
		</div>
	);
};

export default SignUpPage;
