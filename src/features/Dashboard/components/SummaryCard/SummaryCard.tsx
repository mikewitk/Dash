import React from 'react';
import Card from '../../../../components/Card/Card';
import styled from '@emotion/styled';
import { currencyFormat } from '../../utils';

interface SummaryCardProps {
	icon: React.ReactElement;
	title: string;
	value: number;
	bgColor: string;
}

export const DashboardSummaryCard: React.FC<SummaryCardProps> = ({
	icon,
	title,
	value,
	bgColor,
}) => {
	return (
		<Card
			elevation={1}
			pt={3}
			pb={3}
			pl={2}
			pr={2}
			borderRadius={2}
			bgColor={bgColor}
		>
			<StyledCardTitle>
				<StyledTitle>{title}</StyledTitle>
				{icon}
			</StyledCardTitle>
			<StyledValue>{currencyFormat(value)}</StyledValue>
		</Card>
	);
};

export default DashboardSummaryCard;

const StyledCardTitle = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledTitle = styled.p`
	font-size: 16px;
	letter-spacing: 0.5%;
	color: ${({ theme }) => theme.colors.BLACK};
	margin: 0;
	text-transform: capitalize;
`;

const StyledValue = styled.h4`
	font-size: 34px;
	letter-spacing: 0.25%;
	margin: 0;
`;
