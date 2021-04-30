import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Github to={process.env.REACT_APP_REPO_URL} alt='Netflix'>
        <img src='/images/icons/github.png' alt='Github' />
      </Header.Github>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'></Header.Logo>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
