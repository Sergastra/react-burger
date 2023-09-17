import {createAsyncThunk} from "@reduxjs/toolkit";
import * as config from "../../config";

export const fetchIngredients = createAsyncThunk(
  'ingredient/fetchIngredients',
  async () => {
    const response = await fetch(config.getIngredientsUrl);
    const data = await response.json();
    if (data?.success) {
      return data.data;
    } else {
      throw new Error('Ошибка загрузки ингредиентов');
    }
  }
);
