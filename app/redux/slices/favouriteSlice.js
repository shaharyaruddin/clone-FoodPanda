const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  favoritesItem: [],
};

const FavoritesSlice = createSlice({
  name: "favoritesItem",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
        console.log(action)
      state.favoritesItem.push(action.payload);
    },
  },
});

export const { addFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
