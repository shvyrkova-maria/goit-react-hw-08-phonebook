import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function signUpUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
}

export async function logInUser(credentials) {
  const { data } = await axios.post(`/users/login`, credentials);
  token.set(data.token);
  return data;
}

export async function logOutUser() {
  await axios.post(`/users/logout`);
  token.unset();
}

export async function getCurrentUser() {
  const { data } = await axios.get(`/users/current`);
  console.log(data);
  return data;
}
