import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Player } from '../../components';

describe('<Player/>', () => {
  it('renders the <Player/> with a bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.FeatureButton />
        <Player.Video src='/videos/bunny.mp4' data-testid='player' />
      </Player>
    );

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(queryByTestId('player'));

    expect(queryByTestId('player')).toBeFalsy();
    fireEvent.click(getByText('Play Now'));

    expect(queryByTestId('player')).toBeTruthy();
    fireEvent.click(queryByTestId('player'));

    expect(queryByTestId('player')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
