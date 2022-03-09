import GlobalThemeProvider from './lib/theme/GlobalThemeProvider';
import Dashboard from './features/Dashboard';

function App(): JSX.Element {
	return (
		<GlobalThemeProvider>
			<Dashboard />
		</GlobalThemeProvider>
	);
}

export default App;

// AXIOS
// https://www.bezkoder.com/react-typescript-api-call/#Overview_of_React_Typescript_with_API_call_example
// React Query
// https://www.bezkoder.com/react-query-axios-typescript/
