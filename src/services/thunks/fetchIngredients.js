import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from '../../utils/api'


export const fetchIngredients = createAsyncThunk(
  'ingredient/fetchIngredients',
  async ( thunkApi ) => {
    try{
    const res = await request("ingredients")
    return res.data;
    }catch(e){
      return thunkApi.rejectWithValue(e);
    }
  },
);
