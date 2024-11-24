import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    email: '',
    token: null,
    userName: '', 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.userName = action.payload.userName ; 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = '';
      state.token = null;
      state.userName = '';
    },
    updateUserName: (state, action) => {
      state.userName = action.payload.userName; 
    },
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      
    },
  },
});

export const { login, logout, updateUserName, setUserProfile } = userSlice.actions;
export default userSlice.reducer;