import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { peopleApi } from './swapi';
export const store = configureStore({
  reducer: { [peopleApi.reducerPath]: peopleApi.reducer },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    peopleApi.middleware,
  ],
});
setupListeners(store.dispatch);
