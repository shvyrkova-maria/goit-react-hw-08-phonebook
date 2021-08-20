import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/authApi';

const signUp = createAsyncThunk('auth/register', async credentials => {
  try {
    const data = await authApi.signUpUser(credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  try {
    const data = await authApi.logInUser(credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await authApi.logOutUser();
  } catch (error) {
    console.log(error);
  }
});

export { signUp, logIn, logOut };
