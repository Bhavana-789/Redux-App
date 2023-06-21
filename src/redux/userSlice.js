import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//   return axios
//     .get('https://dummyjson.com/users')
//     .then(response => response.data);
// });
export const fetchUsers = createAsyncThunk(
  'user/getUserList',
  async (page, {rejectWithValue}) => {
    try {
      const response = await fetch('https://dummyjson.com/users', {
        method: 'get',
      });
      const {users} = await response.json();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, {payload}) => {
      state.loading = false;
      state.users = [];
      state.error = payload;
    },
  },
});

export const {setUsers} = userSlice.actions;

export default userSlice.reducer;
