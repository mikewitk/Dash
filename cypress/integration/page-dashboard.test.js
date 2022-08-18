describe('Dashboard Page', () => {
	it('should display company numbers summary', () => {
		const totalRevenue = '$123,456.78';
		const totalTransactions = '123,456';
		const totalProducts = '123,456';
		const totalUsers = '123,456';

		cy.server({ force404: true });

		cy.route({
			method: 'GET',
			url: 'https://my.api.mockaroo.com/summary.json?key=c7b1dcd0',
			response: {
				total_revenue: 236345.67,
				total_transactions: 7714,
				total_products: 14163,
				total_users: 17120,
			},
		});

		cy.visit('/dashboard');
		cy.contains('Dashboard page is awesome');
	});
});
