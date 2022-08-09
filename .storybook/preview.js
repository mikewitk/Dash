import React from 'react';
import { ThemeProvider } from '@storybook/theming';
import { muiTheme } from 'storybook-addon-material-ui';

import { theme } from '../src/lib/theme/theme';

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
	muiTheme(),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
