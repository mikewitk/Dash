import React from 'react';
import styled from '@emotion/styled';

interface TagProps {
	element: 'div' | 'p';
}

type Props = {
	tag: React.ComponentType;
	children: string;
};

const StyledDynamicComponent = styled.div``;

const DynamicComponent = ({ tag, children, ...props }: Props) => {
	const WithComponent = StyledDynamicComponent.withComponent(tag);

	return <WithComponent {...props}>{children}</WithComponent>;
};
