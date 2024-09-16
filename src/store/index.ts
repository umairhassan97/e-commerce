import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductState } from 'config/types/ProductInterfaces';



const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;