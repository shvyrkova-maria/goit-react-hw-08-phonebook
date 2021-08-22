import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Toast from 'components/Toast/Toast.jsx';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { getCurrentUser, getIsFetchCurrentUser } from 'redux/auth';
import NavBar from 'components/NavBar/NavBar';
import Container from 'components/Container/Container';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "home" */),
);

const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "register" */),
);

const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage' /* webpackChunkName: "login" */),
);

const ContactsPage = lazy(() =>
  import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "contacts" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchCurrentUser && (
      <>
        <NavBar />
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/register" resticted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" resticted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <Toast />
        </Container>
      </>
    )
  );
}

export default App;
