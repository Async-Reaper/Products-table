import { createSlice } from "@reduxjs/toolkit"

interface IPagination {
   totalPages: number;
   totalCountItem: number;
   limit: number;
   currentPage: number
}

const initialState: IPagination = {
   totalPages: 0,
   totalCountItem: 0,
   limit: 4,
   currentPage: 1
}

const paginationSlice = createSlice({
   name: 'pagination',
   initialState,
   reducers: {
      setLimit(state, action) {
         state.limit = action.payload
      },
      getTotalCountProduct(state, action) {
         state.totalCountItem = action.payload
      },
      setPage(state, action) {
         state.currentPage = action.payload
      }
   }
})

export default paginationSlice.reducer
export const { setLimit, getTotalCountProduct, setPage } = paginationSlice.actions