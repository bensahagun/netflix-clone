import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles/>', () => {
  it('renders <Profiles/> with populated data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture src='/images/ben.jpg' data-testid='profile-picture' />
            <Profiles.Name>Ben Sahagun</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId('profile-picture')).toBeTruthy();
    expect(getByText('Ben Sahagun')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <Profiles/> with populated data but no picture given', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid='profile-picture-misc' />
            <Profiles.Name>Ben Sahagun</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId('profile-picture-misc')).toBeTruthy();
    expect(getByText('Ben Sahagun')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
