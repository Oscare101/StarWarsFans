import {configureStore} from '@reduxjs/toolkit';
import starWarsDataSliceReducer from './starWarsDataSlice';
import themeReducer from './theme';

export const store = configureStore({
  reducer: {
    starWarsData: starWarsDataSliceReducer,
    theme: themeReducer,
  },
});
