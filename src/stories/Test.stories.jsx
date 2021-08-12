// Button.stories.js | Button.stories.jsx

import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Test',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    padding: {
      name: 'padding',
      type: { name: 'string', required: false },
      defaultValue: 'Hello',
      description: 'demo description',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      control: {
        type: 'text'
      }

    }
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { primary: false, ...Primary.args, label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };