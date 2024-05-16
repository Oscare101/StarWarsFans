import {configureStore} from '@reduxjs/toolkit';
import availableTransfersReducer from './availableTransfers';

export const store = configureStore({
  reducer: {
    availableTransfers: availableTransfersReducer,
  },
});
