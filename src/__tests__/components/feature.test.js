import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from '../../components';

describe('<Feature/>', () => {
  it('render the <Feature/> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch Anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(getByText('Watch Anywhere. Cancel at any time.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the <Feature/> with just the title', () => {
    const { container, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(queryByText('Unlimited films, TV programmes and more.')).toBeTruthy();
    expect(queryByText('Watch Anywhere. Cancel at any time.')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('render the <Feature/> with just the subtitle', () => {
    const { container, queryByText } = render(
      <Feature>
        <Feature.SubTitle>Watch Anywhere. Cancel at any time.</Feature.SubTitle>
      </Feature>
    );

    expect(queryByText('Unlimited films, TV programmes and more.')).toBeFalsy();
    expect(queryByText('Watch Anywhere. Cancel at any time.')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
