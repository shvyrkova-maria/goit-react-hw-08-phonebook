import { useDispatch } from 'react-redux';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth';

import {
  FormWrap,
  FormStyled,
  FieldStyled,
  Button,
  Label,
  ValidationMessage,
} from 'pages/LoginPage/LoginPage.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .min(7, 'Password is too short - should be 7 chars minimum.')
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
      <FormWrap>
        <FormStyled>
          <h2>Login to your accout</h2>
          <Label htmlFor={`id-${emailInputId}`}>
            <FiMail />
            Email
          </Label>

          <FieldStyled
            name="email"
            type="email"
            id={`id-${emailInputId}`}
            placeholder="example@gmail.com"
          />

          <ErrorMessage name="email" component={ValidationMessage} />
          <Label htmlFor={`id-${passwordInputId}`}>
            <RiLockPasswordFill />
            Password
          </Label>

          <FieldStyled
            name="password"
            type="password"
            id={`id-${passwordInputId}`}
            placeholder="password"
          />
          <ErrorMessage name="password" component={ValidationMessage} />
          <Button type="submit">Log in</Button>
        </FormStyled>
      </FormWrap>
    </Formik>
  );
}

export default LoginPage;
