import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

function LoginPage() {
  const dispatch = useDispatch();

  const handleLogInUserOnSubmit = user => {
    dispatch(logIn(user));
  };

  let emailInputId = nanoid(3);
  let passwordInputId = nanoid(3);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const { email, password } = values;
        handleLogInUserOnSubmit({ email, password });
        resetForm();
      }}
    >
      <Form>
        <label htmlFor={`id-${emailInputId}`}>Email</label>
        <Field
          name="email"
          type="email"
          id={`id-${emailInputId}`}
          placeholder="example@gmail.com"
        />
        <ErrorMessage name="email" />
        {/* <ErrorMessage name="number" component={ValidationMessage} /> */}

        <label htmlFor={`id-${passwordInputId}`}>Password</label>
        <Field
          name="password"
          type="password"
          id={`id-${passwordInputId}`}
          placeholder="your password"
        />
        <ErrorMessage name="password" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}

// LoginPage.propTypes = {

// }

export default LoginPage;
