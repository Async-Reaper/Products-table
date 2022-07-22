import { createSlice } from "@reduxjs/toolkit"

interface IPagination {
   totalPages: number;
   totalCountItem: number;
   limit: number;
}

const initialState: IPagination = {
   totalPages: 0,
   totalCountItem: 0,
   limit: 4
}

const paginationSlice = createSlice({
   name: 'pagination',
   initialState,
   reducers: {
      setLimit(state, action) {
         state.limit = action.payload
      },
      getTotalCountPage(state, action) {
         state.totalCountItem = action.payload
      }
   }
})

export default paginationSlice.reducer
export const { setLimit, getTotalCountPage } = paginationSlice.actions