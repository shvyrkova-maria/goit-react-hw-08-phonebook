import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

//links
export const NavLinkStyled = styled(NavLink)`
  &:hover,
  &:focus {
    color: #ec8e11;
  }
`;

//forms
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 40px 25px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  background-color: var(--color);
  box-shadow: var(--main-shadow);
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 8px 0;
  margin-bottom: 5px;
  background-color: transparent;
  /* background-color: rgba(124, 137, 157, 0.1); */
  border: none;
  border-bottom: 1px solid #7c899d;
  &::placeholder {
    font-size: 14px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 5px;
  & > svg {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 12px;
  margin-top: 20px;
  font-size: 15px;
  font-weight: 700;
  background-color: var(--accent-color);
  color: white;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: var(--base-shadow);
  }
`;

export const ValidationMessage = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NavWrap = styled.div`
  & > a:first-of-type {
    margin-right: 10px;
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
