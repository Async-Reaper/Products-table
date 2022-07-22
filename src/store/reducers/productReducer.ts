import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../models/IProducts";

interface IProductsSlice {
   products: IProducts[];
   loading: boolean;
   error: boolean;
   totalCountItem: string
}

const initialState: IProductsSlice = {
   products: [],
   loading: false,
   error: false,
   totalCountItem: ''
}

const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      getProductFetch(state) {
         state.error = false;
         state.loading = true;
      },
      getProductSuccess(state, action) {
         state.error = false;
         state.loading = false
         state.products = action.payload
         state.totalCountItem = action.payload
      },
      getProductError(state) {
         state.error = true;
         state.loading = false;
      },
      getTotalCountPage(state, action) {
         state.totalCountItem = action.payload
      }
   }
})

export default productSlice.reducer
export const { getProductFetch, getProductSuccess, getProductError, getTotalCountPage } = productSlice.actions