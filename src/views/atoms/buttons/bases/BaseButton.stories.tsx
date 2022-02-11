import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import BaseButton from './BaseButton';

export default {
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

export const Primary: ComponentStoryObj<typeof BaseButton> = {
  args: {
    label: 'Primary',
    onClick: () => {
      console.log('test');
    },
  },
};

export const Secondary: ComponentStoryObj<typeof BaseButton> = {
  args: {
    label: 'Secondary',
    color: 'secondary',
    onClick: () => {
      console.log('test');
    },
  },
};
