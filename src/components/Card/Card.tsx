import React from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
	elevation: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;
}

const Card: React.FC<CardProps> = ({ children, elevation }) => {
	return <StyledCard elevation={elevation}>{children}</StyledCard>;
};

export default Card;
