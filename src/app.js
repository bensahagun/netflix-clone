import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
