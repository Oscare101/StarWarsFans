import {configureStore} from '@reduxjs/toolkit';
import availableTransfersReducer from './availableTransfers';

export const store = configureStore({
  reducer: {
    availableTransfers: availableTransfersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
