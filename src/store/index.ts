import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/user.slice';

export const store = configureStore({
  reducer: {
    userData: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;