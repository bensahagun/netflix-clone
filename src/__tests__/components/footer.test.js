import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../components';

describe('<Footer/>', () => {
  it('renders <Footer/> with data', () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href='#'>FAQ</Footer.Link>
            <Footer.Link href='#'>Investor Relations</Footer.Link>
            <Footer.Link href='#'>Ways to Watch</Footer.Link>
            <Footer.Link href='#'>Corporate Information</Footer.Link>
            <Footer.Link href='#'>Netflix Originals</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>Help Centre</Footer.Link>
            <Footer.Link href='#'>Jobs</Footer.Link>
            <Footer.Link href='#'>Terms of Use</Footer.Link>
            <Footer.Link href='#'>Contact Us</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>Account</Footer.Link>
            <Footer.Link href='#'>Redeem Gift Cards</Footer.Link>
            <Footer.Link href='#'>Privacy</Footer.Link>
            <Footer.Link href='#'>Speed Test</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Link href='#'>Media Centre</Footer.Link>
            <Footer.Link href='#'>Buy Gift Cards</Footer.Link>
            <Footer.Link href='#'>Cookie Preferences</Footer.Link>
            <Footer.Link href='#'>Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix United States</Footer.Text>
      </Footer>
    );

    expect(getByText('Questions? Contact us.')).toBeTruthy();
    expect(getByText('FAQ')).toBeTruthy();
    expect(getByText('Investor Relations')).toBeTruthy();
    expect(getByText('Ways to Watch')).toBeTruthy();
    expect(getByText('Corporate Information')).toBeTruthy();
    expect(getByText('Help Centre')).toBeTruthy();
    expect(getByText('Jobs')).toBeTruthy();
    expect(getByText('Terms of Use')).toBeTruthy();
    expect(getByText('Contact Us')).toBeTruthy();
    expect(getByText('Account')).toBeTruthy();
    expect(getByText('Redeem Gift Cards')).toBeTruthy();
    expect(getByText('Privacy')).toBeTruthy();
    expect(getByText('Speed Test')).toBeTruthy();
    expect(getByText('Media Centre')).toBeTruthy();
    expect(getByText('Buy Gift Cards')).toBeTruthy();
    expect(getByText('Cookie Preferences')).toBeTruthy();
    expect(getByText('Legal Notices')).toBeTruthy();
    expect(getByText('Netflix United States')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
