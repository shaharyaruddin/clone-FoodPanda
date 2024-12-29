const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  favouritesItem: [],
};

const Favourite = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourites: (state, action) => {
      state.favouritesItem.push(action.payload);
    },
  },
});

export const { addFavourites } = Favourite.actions;
export default Favourite.reducer;
