import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, screen, within } from '@storybook/testing-library';
import TmpSendEmailCard from './TmpSendEmailCard';

export default {
  component: TmpSendEmailCard,
} as ComponentMeta<typeof TmpSendEmailCard>;

export const FirstStory: ComponentStoryObj<typeof TmpSendEmailCard> = {
  // args: {},
  play: async () => {
    await userEvent.type(screen.getByRole('textbox'), 'hoge@example.com', {
      delay: 100,
    });
    await userEvent.click(screen.getByRole('button'));
  },
};

export const FirstStoryByWithin: ComponentStoryObj<typeof TmpSendEmailCard> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole('textbox'), 'hoge@example.com', {
      delay: 100,
    });
    await userEvent.click(canvas.getByRole('button'));
  },
};
