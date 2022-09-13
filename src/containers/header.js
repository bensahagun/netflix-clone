import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Github>
        <a href='https://github.com/bensahagun/netflix-clone' target='_blank'>
          <img src='/images/icons/github.png' alt='Github' />
        </a>
      </Header.Github>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'></Header.Logo>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
