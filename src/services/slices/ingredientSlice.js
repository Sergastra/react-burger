import { createSlice } from "@reduxjs/toolkit";
import { randomKey } from "../../utils/random-key";
import { fetchIngredients } from "../thunks/fetchIngredients";

const initialState = {
  ingredients: [],
  onIngredients: [],
  bun: {},
  ingredientsLoading: true
};

const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setOnIngredients: (state, action) => {
      state.onIngredients = action.payload;
    },
    addOnIngredients: (state, action) => {
      const newIngredient = { ...action.payload, _id: randomKey() };

      if (newIngredient.type === 'bun') {

        const existingBun = state.onIngredients.map((ingredient) => ingredient.type === 'bun');
        if (existingBun) {
          // Заменяем существующую булку на новую
          const updatedIngredients = state.onIngredients.map((ingredient) =>
            ingredient.type === 'bun' ? newIngredient : ingredient,
          );
          state.onIngredients = updatedIngredients;
        } else {
          state.onIngredients.push(newIngredient);
        }
      } else {
        // Добавляем обычный ингредиент
        state.onIngredients.push(newIngredient);
      }
    },
    setBun: (state, action) => {
      state.bun = action.payload;
    },
    setIngredientsLoading: (state, action) => {
      state.ingredientsLoading = action.payload;
    },
    deleteIngredient: (state, action) => {
      const id = action.payload;
      const result = state.onIngredients.filter((item) => item._id !== id);
      state.onIngredients = result;
    },

  },

  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.pending, (state) => {
      state.ingredientsLoading = true;
    });
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
      state.ingredientsLoading = false;
    });
    builder.addCase(fetchIngredients.rejected, (state) => {
      state.ingredientsLoading = false;
      alert('Во время загрузки произошла ошибка');
    });
  }
});

export const {
  addOnIngredients,
  setBun,
  setOnIngredients,
  deleteIngredient
} = ingredientSlice.actions;

export default ingredientSlice.reducer;
