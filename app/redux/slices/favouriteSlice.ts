const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  favoritesItem: [],
};

const FavoritesSlice = createSlice({
  name: "favoritesItem",
  initialState,
  reducers: {
    addFavorites: (state: any, action: any) => {
      console.log(action);
      state.favoritesItem.push(action.payload);
    },
    deleteFavorites: (state: any, action: any)=>{
      
    }
  },
});

export const { addFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
