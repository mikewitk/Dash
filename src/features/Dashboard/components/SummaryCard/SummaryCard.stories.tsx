import { ComponentMeta, ComponentStory } from '@storybook/react';
import SummaryCard from './SummaryCard';
import { CreditCard } from 'react-feather';

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
};
