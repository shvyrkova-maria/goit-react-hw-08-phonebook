import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
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
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/contacts">
              <ContactsPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
