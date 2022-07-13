import React from 'react';
import { StyledCard } from './Card.styles';

export interface CardProps {
	elevation: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;
	pt?: number;
	pr?: number;
	pb?: number;
	pl?: number;
	borderRadius?: number;
	bgColor: string;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
	return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
