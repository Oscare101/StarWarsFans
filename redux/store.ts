import {configureStore} from '@reduxjs/toolkit';
import starWarsDataSliceReducer from './starWarsDataSlice';
import themeReducer from './theme';
import likedCharactersReducer from './likedCharacters';

export const store = configureStore({
  reducer: {
    starWarsData: starWarsDataSliceReducer,
    theme: themeReducer,
    likedCharacters: likedCharactersReducer,
  },
});
