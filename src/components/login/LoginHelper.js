import mockapi from './../../apis/mockapi';

const PASSWORD_LENGTH = 8;

const getUserByEmailAndPassword = async (email, password) => {
  const users = (await mockapi.get('/users')).data;
  if (users.length === 0) return null;
  const user = users.filter((item) => item.email === email && item.password === password);
  if (user.length === 0) return null;

  return user[0];
};

const registerNewUser = async ({ email, username, password }) => {
  const payload = { email, username, password };
  const response = await mockapi.post('/users', payload);
  return response.data;
};

const validasiForm = (nilai) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!nilai.email) {
    errors.email = 'Email tidak boleh kosong';
  } else if (!regex.test(nilai.email)) {
    errors.email = 'Format email salah !!!';
  }
  if (!nilai.username) {
    errors.username = 'Nama anda tidak boleh kosong';
  }
  if (!nilai.password) {
    errors.password = 'Password anda tidak boleh kosong';
  } else if (nilai.password.length <= PASSWORD_LENGTH) {
    errors.password = 'Password harus lebih dari 8 karakter';
  }
  return errors;
};

export { validasiForm, getUserByEmailAndPassword, registerNewUser };
