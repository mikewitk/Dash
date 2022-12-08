import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './features/Dashboard';
import SignUp from './features/LogIn';
import { useAccountCreation } from './features/LogIn/hooks/useAccountCreation';
import { UserAccountCreationProps } from './features/LogIn/types';
import GlobalThemeProvider from './lib/theme/GlobalThemeProvider';

function App(): JSX.Element {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { mutate, isError } = useAccountCreation();

	function createAccount(userInfo: UserAccountCreationProps) {
		mutate(userInfo);
		if (!isError) {
			setIsLoggedIn(true);
		}
	}

	function logOut() {
		setIsLoggedIn(false);
	}

	return (
		<GlobalThemeProvider>
			<div>
				<Routes>
					<Route
						path="/"
						element={
							isLoggedIn ? (
								<Dashboard isLoggedIn={isLoggedIn} logOut={logOut} />
							) : (
								<SignUp createAccount={createAccount} />
							)
						}
					/>
				</Routes>
			</div>
		</GlobalThemeProvider>
	);
}

export default App;

// AXIOS
// https://www.bezkoder.com/react-typescript-api-call/#Overview_of_React_Typescript_with_API_call_example
// React Query
// https://www.bezkoder.com/react-query-axios-typescript/
