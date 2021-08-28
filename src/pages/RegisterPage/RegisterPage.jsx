import { useDispatch } from 'react-redux';
import { RiLockPasswordFill, RiUser3Fill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { registerValidationSchema } from 'utils/YupValidationSchemes';
import { signUp } from 'redux/auth';
import {
  FormWrap,
  FormStyled,
  FormTitle,
  FieldStyled,
  Button,
  Label,
  ValidationMessage,
} from 'styles/common.styled';

function RegisterPage() {
  const dispatch = useDispatch();

  let nameInputId = nanoid(3);
  let emailInputId = nanoid(3);
  let passwordInputId = nanoid(3);

  const handleAddUserOnSubmit = newUser => {
    dispatch(signUp(newUser));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, email, password } = values;
        handleAddUserOnSubmit({ name, email, password });
        resetForm();
      }}
    >
      <FormWrap>
        <FormStyled autoComplete="off">
          <FormTitle>Create your accout</FormTitle>
          <Label htmlFor={`id-${nameInputId}`}>
            <RiUser3Fill />
            Name
          </Label>
          <FieldStyled
            name="name"
            type="text"
            id={`id-${nameInputId}`}
            placeholder="name"
          />
          <ErrorMessage name="name" component={ValidationMessage} />

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

          <Button type="submit">Join</Button>
        </FormStyled>
      </FormWrap>
    </Formik>
  );
}

export default RegisterPage;
