import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TmpSendEmailCard.stories';

const { FirstStoryByWithin } = composeStories(stories);

describe('お試しテスト', () => {
  test('sample', async () => {
    const { container } = render(<FirstStoryByWithin />);

    await FirstStoryByWithin.play({ canvasElement: container });

    expect(screen.getByText('送信しました。')).toBeInTheDocument;
  });
});
