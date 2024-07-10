import { Movie } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  favs: [] as Movie[],
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Movie>) => {
      state.favs = [...state.favs, action.payload];
    },
    removeFav: (state, action: PayloadAction<Movie>) => {
      state.favs = state.favs.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const { addFav, removeFav } = storeSlice.actions;

export default storeSlice.reducer;
