import { combineReducers, configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./reducers/paginationReducer";
import productReducer from "./reducers/productReducer";
import searchReducer from "./reducers/searchReducer";

const rootStore = combineReducers({
   products: productReducer,
   pagination: paginationReducer,
   search: searchReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootStore
   })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']
