import styled from '@emotion/styled';

const elevationValues = {
	0: `0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 0px rgba(0, 0, 0, 0.2);`,
	1: `0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 3px 0px rgba(0, 0, 0, 0.2);`,
	2: `0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 5px 0px rgba(0, 0, 0, 0.2);`,
	3: `0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.2);`,
	4: `0px 3px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.2);`,
	6: `0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px 0px rgba(0, 0, 0, 0.2);`,
	8: `0px 12px 17px 0px rgba(0, 0, 0, 0.14), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 7px 8px 0px rgba(0, 0, 0, 0.2);`,
	9: `0px 9px 12px 0px rgba(0, 0, 0, 0.14), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 5px 6px 0px rgba(0, 0, 0, 0.2);`,
	12: `0px 12px 17px 0px rgba(0, 0, 0, 0.14), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 7px 8px 0px rgba(0, 0, 0, 0.2);`,
	16: `0px 16px 24px 0px rgba(0, 0, 0, 0.14), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.2);`,
	24: `0px 24px 38px 0px rgba(0, 0, 0, 0.14), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 11px 15px 0px rgba(0, 0, 0, 0.2);`,
};

export const StyledCard = styled.div<{ elevation: number }>`
	min-width: 50px;
	min-height: 50px;
	/* offset-x | offset-y | blur-radius | spread-radius | color */
	box-shadow: ${({ elevation }) => elevationValues[elevation]};
`;
