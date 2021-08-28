import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

//links
export const NavWrap = styled.div`
  & > a:first-of-type {
    margin-right: 10px;
  }
`;

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
  min-width: 250px;
  padding: 35px 20px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  background-color: var(--bg-color);
  box-shadow: var(--main-shadow);

  @media screen and (min-width: 425px) {
    width: 325px;
  }

  @media screen and (min-width: 768px) {
    padding: 55px 30px;
    width: 420px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 20px;

  @media screen and (min-width: 425px) {
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 8px 0;
  margin-bottom: 5px;
  background-color: transparent;
  font-size: 16px;
  color: var(--base-color);
  border: none;
  outline: none;
  border-bottom: 1px solid var(--base-color);
  &:focus,
  &:hover {
    border-bottom: 1px solid var(--accent-color);
  }
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
  color: var(--text-color);
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

export const FormWrap = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
