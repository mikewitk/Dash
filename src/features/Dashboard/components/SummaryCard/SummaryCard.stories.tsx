import { ComponentMeta, ComponentStory } from '@storybook/react';
import SummaryCard from './SummaryCard';

export default {
	title: 'Components/SummaryCard',
	component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const Template: ComponentStory<typeof SummaryCard> = args => (
	<SummaryCard {...args} />
);

export const TotalRevenue = Template.bind({});
