import { createAsyncThunk } from "@reduxjs/toolkit";
import * as config from "../../config";

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (IdsList) => {
    const response = await fetch(config.createOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: IdsList })
    });

    if (response.ok) {
      const result = await response.json()
      return result.order.number
    }
  }
);
