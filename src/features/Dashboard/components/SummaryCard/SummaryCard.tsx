import React from 'react';
import {
	StyledCardTitle,
	StyledTitle,
	StyledValue,
	StyledCard,
} from './SummaryCard.styles';
import { currencyFormat } from '../../utils';

interface SummaryCardProps {
	icon: React.ReactElement;
	title: string;
	value: number;
	backgroundColor: string;
}

export const DashboardSummaryCard = ({
	icon,
	title,
	value,
	backgroundColor,
}: SummaryCardProps): JSX.Element => {
	return (
		<StyledCard bg={backgroundColor}>
			<StyledCardTitle>
				<StyledTitle>{title}</StyledTitle>
				{icon}
			</StyledCardTitle>
			<StyledValue>{currencyFormat(value)}</StyledValue>
		</StyledCard>
	);
};

export default DashboardSummaryCard;
