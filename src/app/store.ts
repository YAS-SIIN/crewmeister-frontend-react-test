import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import absencesReducer from '../features/absences/absencesSlice';

export const store = configureStore({
  reducer: {
    absencesReducer: absencesReducer, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
