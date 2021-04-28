import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages';

test('renders <Home/> Page', () => {
  const { getByText, getByTestId, getByPlaceholderText, getAllByText, getAllByPlaceholderText } = render(
    <Router>
      <Home />
    </Router>
  );

  expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy();
  expect(getByText('Watch Anywhere. Cancel at any time.')).toBeTruthy();
  expect(getAllByText('Try it now')).toBeTruthy();
  expect(getAllByText('Ready to watch? Enter your email to create or restart your membership')).toBeTruthy();
  expect(getAllByPlaceholderText('Email Address')).toBeTruthy();
});
