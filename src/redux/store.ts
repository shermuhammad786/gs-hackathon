import { configureStore } from '@reduxjs/toolkit'
import productData from './slice'
import addToCart from './addToCart.slice';
// import quizData from "./quizSlice"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)


const persistConfig = {
  key: 'products',
  storage,
};
const persistPropularConfig = {
  key: 'popularProducts',
  storage,
};
const persistAllConfig = {
  key: 'allProducts',
  storage,
};
const persistAddToCartConfig = {
  key: 'addToCart',
  storage,
};

const persistedNewProductDataReducer = persistReducer(persistConfig, productData);
const persistedPopularProductDataReducer = persistReducer(persistPropularConfig, productData);
const persistedAllProductDataReducer = persistReducer(persistAllConfig, productData);
const persistedAddToCartReducer = persistReducer(persistAddToCartConfig, addToCart);


export const store = configureStore({
  reducer: {
    newProducts: persistedNewProductDataReducer,
    popularProducts: persistedPopularProductDataReducer,
    allProducts: persistedAllProductDataReducer,
    addToCart: persistedAddToCartReducer,
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