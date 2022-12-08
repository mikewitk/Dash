import GlobalThemeProvider from './lib/theme/GlobalThemeProvider';
import Dashboard from './features/Dashboard';
import SignUp from './features/LogIn';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { UserAccountCreationProps } from './features/LogIn/types';
import { useAccountCreation } from './features/LogIn/hooks/useAccountCreation';

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
			<div className="App">
				<ul className="App-header">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					{isLoggedIn ? (
						<li>
							<Link to="/" onClick={logOut}>
								Sign Out
							</Link>
						</li>
					) : null}
				</ul>
				<Routes>
					<Route
						path="/"
						element={
							isLoggedIn ? (
								<Dashboard />
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
