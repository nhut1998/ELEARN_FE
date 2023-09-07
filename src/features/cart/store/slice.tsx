import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "types";
import { ICart } from "types/models/Cart";

import { ICourseElearn } from "types/models/Course";


const initialState: ICart = {
  cart: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<ICourseElearn>) {
      state.cart = [...state.cart, { ...action.payload }];
    },
    remove(state, action: PayloadAction<string>) {
      const cartClone =  [...state.cart]
      state.cart = cartClone.filter((item) => item.courseId !== action.payload);
    }
  }
})

export const cartAction = CartSlice.actions.setCart;
export const removeCart = CartSlice.actions.remove;


export const cartList = (state: RootState) => state.cart.cart;


const CartReducer = CartSlice.reducer;
export default CartReducer