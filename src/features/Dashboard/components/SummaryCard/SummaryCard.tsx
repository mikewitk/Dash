import React from 'react';
import {
	StyledCardTitle,
	StyledTitle,
	StyledValue,
} from './SummaryCard.styles';
import Card from '@mui/material/Card';
import { currencyFormat } from '../../utils';

interface SummaryCardProps {
	icon: React.ReactElement;
	title: string;
	value: number;
}

export const DashboardSummaryCard = ({
	icon,
	title,
	value,
}: SummaryCardProps): JSX.Element => {
	return (
		<Card>
			<StyledCardTitle>
				<StyledTitle>{title}</StyledTitle>
				{icon}
			</StyledCardTitle>
			<StyledValue>{currencyFormat(value)}</StyledValue>
		</Card>
	);
};

export default DashboardSummaryCard;
