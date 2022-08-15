import { ComponentMeta, ComponentStory } from '@storybook/react';
import SummaryCard from './SummaryCard';
import { CreditCard, Tag, ThumbsUp, Users } from 'react-feather';

export default {
	title: 'Components/SummaryCard',
	component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = args => (
	<SummaryCard {...args} />
);

export const TotalRevenue = Template.bind({});
TotalRevenue.args = {
	icon: <CreditCard size={24} />,
	title: 'total revenues',
	value: 2129430,
	backgroundColor: '#E0F7FA',
	isCurrency: true,
};

export const TotalTransactions = Template.bind({});
TotalTransactions.args = {
	icon: <Tag size={24} />,
	title: 'total transactions',
	value: 1520,
	backgroundColor: '#28dbf3',
	isCurrency: false,
};

export const TotalLikes = Template.bind({});
TotalLikes.args = {
	icon: <ThumbsUp size={24} />,
	title: 'total likes',
	value: 9721,
	backgroundColor: '#7cf5c2',
	isCurrency: false,
};

export const TotalUsers = Template.bind({});
TotalUsers.args = {
	icon: <Users size={24} />,
	title: 'total users',
	value: 892,
	backgroundColor: '#d3f2e5',
	isCurrency: false,
};
