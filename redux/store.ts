import {configureStore} from '@reduxjs/toolkit';
import starWarsDataSliceReducer from './starWarsDataSlice';

export const store = configureStore({
  reducer: {
    starWarsData: starWarsDataSliceReducer,
  },
});
