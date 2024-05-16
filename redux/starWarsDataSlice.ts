import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: any = {};

const starWarsDataSlice = createSlice({
  name: 'starWarsData',
  initialState,
  reducers: {
    updateStarWarsData: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {updateStarWarsData} = starWarsDataSlice.actions;
export default starWarsDataSlice.reducer;
