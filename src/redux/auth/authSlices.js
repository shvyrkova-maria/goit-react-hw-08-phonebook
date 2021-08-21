import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getCurrentUser } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [getCurrentUser.pending]: (state, _) => {
      state.isFetchCurrentUser = true;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
    },
    [getCurrentUser.rejected]: (state, _) => {
      state.isFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
