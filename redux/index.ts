import {configureStore} from '@reduxjs/toolkit';
import starWarsDataSliceReducer from './starWarsDataSlice';
import themeReducer from './theme';

export const store = configureStore({
  reducer: {
    starWarsData: starWarsDataSliceReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
