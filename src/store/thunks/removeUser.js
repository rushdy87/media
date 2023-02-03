import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const remomoveUser = createAsyncThunk('users/remove', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);
  return user;
});

export { remomoveUser };
