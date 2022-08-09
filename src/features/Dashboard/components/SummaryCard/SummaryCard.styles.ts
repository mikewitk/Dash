import styled from '@emotion/styled';

export const StyledCardTitle = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledTitle = styled.p`
	font-size: 16px;
	letter-spacing: 0.5%;
	color: ${({ theme }) => theme.colors.BLACK};
	margin: 0;
	text-transform: capitalize;
`;

export const StyledValue = styled.h4`
	font-size: 34px;
	letter-spacing: 0.25%;
	margin: 0;
`;
