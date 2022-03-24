import { render } from '@testing-library/react';
import { DashboardSummaryCard } from './DashboardSummaryCard';

describe('Dashboard Page - Summary Card', () => {
	it('should load summary card on first render', () => {
		const loadSummary = jest.fn().mockName('loadSummary');
	});

	// FIX: Summary should be a container for the cards. A container where the API will be called
	// render(<DashboardSummaryCard loadSummary />)
});

export {};
