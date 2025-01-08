const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  favoritesItem: [],
};

const FavoritesSlice = createSlice({
  name: "favoritesItem",
  initialState,
  reducers: {
    addFavorites: (state: any, action: any) => {
      state.favoritesItem.push(action.payload);
    },
    deleteFavorites: (state: any, action: any) => {
      state.favoritesItem = state.favoritesItem.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const { addFavorites, deleteFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
