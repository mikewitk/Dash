import React from 'react';
import Card from '../../../../components/Card/Card';

export const DashboardSummaryCard: React.FC = () => {
	return (
		<Card elevation={1} pt={3} pb={3} pl={2} pr={2} borderRadius={2}>
			<p>Title</p>
			<div>ICON</div>
			<p>VALUE</p>
		</Card>
	);
};

export default DashboardSummaryCard;
