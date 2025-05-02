import { savingsAPI } from "@/api/savings";
import { transactionsAPI } from "@/api/transactions";
import { configureStore } from "@reduxjs/toolkit";


// Define the root reducer object
const rootReducer = {
    [savingsAPI.reducerPath]: savingsAPI.reducer,
    [transactionsAPI.reducerPath]: transactionsAPI.reducer,
};


// Create and export the store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(savingsAPI.middleware, transactionsAPI.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;