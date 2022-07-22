import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

const rootStore = combineReducers({
   products: productReducer
})

export const setupStore = () => {
   return configureStore({
      reducer: rootStore
   })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']
