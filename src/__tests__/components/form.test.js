import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Form } from '../../components';

describe('<Form/>', () => {
  it('renders the <Form/> with populated data', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>

        <Form.Base>
          <Form.Input placeholder='Email Address' onChange={() => {}}></Form.Input>
          <Form.Input type='password' autocomplete='off' placeholder='Password' onChange={() => {}}></Form.Input>
          <Form.Submit disabled type='submit'>
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix ?{' '}
          <Router>
            <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Router>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google RECAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText("This page is protected by Google RECAPTCHA to ensure you're not a bot. Learn more.")
    ).toBeTruthy();

    expect(getByText('Sign In Now')).toBeTruthy();
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('Sign In').disabled).toBeTruthy();

    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders <Form/> with an error', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>
        <Form.Submit type='submit'>Sign In</Form.Submit>
      </Form>
    );

    expect(getByText('Your email address is already being used')).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
