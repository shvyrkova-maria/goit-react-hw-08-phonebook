// import PropTypes from 'prop-types'
import { nanoid } from 'nanoid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
});

function LoginPage() {
  let emailInputId = nanoid(3);
  let passwordInputId = nanoid(3);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // const { name, email, password } = values;
        // handleAddContactOnSubmit({  email, password });
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
