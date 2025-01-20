import { configureStore } from '@reduxjs/toolkit'
import productData from './slice'
// import quizData from "./quizSlice"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)


const persistConfig = {
  key: 'products',
  storage,
};
const persistPropularConfig = {
  key: 'products',
  storage,
};
const persistAllConfig = {
  key: 'allProducts',
  storage,
};

const persistedNewProductDataReducer = persistReducer(persistConfig, productData);
const persistedPopularProductDataReducer = persistReducer(persistPropularConfig, productData);
const persistedAllProductDataReducer = persistReducer(persistAllConfig, productData);


export const store = configureStore({
  reducer: {
    newProducts: persistedNewProductDataReducer,
    popularProducts: persistedPopularProductDataReducer,
    allProducts: persistedAllProductDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// // Export the persistor to use with PersistGate in your application
export const persistor = persistStore(store); 