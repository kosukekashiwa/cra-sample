import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import BaseTextButton from './BaseTextButton';

export default {
  component: BaseTextButton,
} as ComponentMeta<typeof BaseTextButton>;

export const Default: ComponentStoryObj<typeof BaseTextButton> = {
  args: {
    label: 'HogeHoge',
    onClick: () => {
      console.log('test');
    },
  },
};

export const Small: ComponentStoryObj<typeof BaseTextButton> = {
  args: {
    label: 'HogeHoge',
    fontSize: 'small',
    onClick: () => {
      console.log('test');
    },
  },
};
