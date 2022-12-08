export interface SignUpPageProps {
	createAccount: (userInfo: UserAccountCreationProps) => void;
}

export interface UserAccountCreationProps {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
	userAgreed: boolean;
}
