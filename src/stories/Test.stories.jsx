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
    //π Now all Button stories will be primary.
    primary: true,
  },
}

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <Button {...args} />;

//π Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { primary: false, ...Primary.args, label: 'ππππ―' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: 'ππππ€' };