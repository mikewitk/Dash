import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';

export const StyledCardTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	flex: 1;
`;

export const StyledTitle = styled.h6`
	color: ${({ theme }) => theme.colors.BLACK};
	font-size: 20px;
	font-weight: medium;
	letter-spacing: 0.15%;
	margin: 0;
	text-transform: capitalize;
`;

export const StyledValue = styled.p`
	color: ${({ theme }) => theme.colors.BLACK};
	font-size: 34px;
	font-weight: normal;
	letter-spacing: 0.25%;
	margin: 0;
`;

export const StyledCard = styled(Card)`
	width: 200px;
	height: 120px;
	padding: 20px 20px 25px 20px;
	border-radius: 16px !important;
	display: flex;
	flex-direction: column;
	background-color: ${props => props.bg} !important;
`;
