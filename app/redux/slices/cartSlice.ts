const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  addToCart: [],
};

export const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addItems: (state: any, action: any) => {
      const found = state.addToCart.find(
        (item: any) => item.id == action.payload.id
      );
      if (!found) {
        state.addToCart.push(action.payload);
      }
    },
    removeCart: (state: any, action: any) => {
      state.addToCart = state.addToCart.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItems, removeCart } = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
