import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		elevation: [0, 1, 2, 3, 4, 6, 8, 9, 12, 16, 24],
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	elevation: 1,
	pt: 1,
	pr: 1,
	pb: 1,
	pl: 1,
	borderRadius: 2,
};
