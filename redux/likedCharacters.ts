import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any[] = [];

const likedCharactersSlice = createSlice({
  name: 'likedCharacters',
  initialState,
  reducers: {
    updateLikedCharacters: (state, action: PayloadAction<any[]>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const {updateLikedCharacters} = likedCharactersSlice.actions;
export default likedCharactersSlice.reducer;
