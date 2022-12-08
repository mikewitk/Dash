import React from 'react';
import { Global, ThemeProvider, css } from '@emotion/react';
import { theme } from './theme';

const GlobalThemeProvider: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Global
			styles={css`
				* {
					box-sizing: border-box;
				}
				html,
				body {
					margin: 0;
					padding: 0;
				}
			`}
		/>
		{children}
	</ThemeProvider>
);

export default GlobalThemeProvider;
