import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Color = Template.bind({});
Color.args = {
  variant: 'color',
  color: 'red',
  label: 'Button',
};

export const Hover = Template.bind({});
Hover.args = {
  variant: 'hover',
  color: 'red',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};

export const Block = Template.bind({});
Block.args = {
  label: 'Button',
  block: true
};
