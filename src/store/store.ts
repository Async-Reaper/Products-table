import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootStore = combineReducers({

})

export const setupStore = () => {
   return configureStore({
      reducer: rootStore
   })
}

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']
