
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  addToCart: [],
};

export const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addItems: (state: any, action: any) => {
      state.addToCart.push(action.payload);
    },
  },
});

export const { addItems } = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
