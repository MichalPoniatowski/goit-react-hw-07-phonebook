import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.baseURL = 'https://64d9fc3ce947d30a260a982f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('res', response);
      console.log('res.data', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
