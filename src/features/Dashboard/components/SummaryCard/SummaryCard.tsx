import React from 'react';
import {
	StyledCardTitle,
	StyledTitle,
	StyledValue,
	StyledCard,
} from './SummaryCard.styles';
import { currencyFormat, numberFormat } from '../../utils';

interface SummaryCardProps {
	icon: React.ReactElement;
	title: string;
	value: number;
	backgroundColor: string;
	isCurrency: boolean;
}

export const DashboardSummaryCard = ({
	icon,
	title,
	value,
	backgroundColor,
	isCurrency,
}: SummaryCardProps): JSX.Element => {
	return (
		<StyledCard style={{ backgroundColor: backgroundColor }}>
			<StyledCardTitle>
				<StyledTitle>{title}</StyledTitle>
				{icon}
			</StyledCardTitle>
			<StyledValue>
				{isCurrency ? currencyFormat(value) : numberFormat(value)}
			</StyledValue>
		</StyledCard>
	);
};

export default DashboardSummaryCard;
