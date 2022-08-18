import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Dashboard page is awesome/i);
	expect(linkElement).toBeInTheDocument();
});
