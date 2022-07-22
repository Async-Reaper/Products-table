import { createSlice } from "@reduxjs/toolkit";

interface ISearchSlice {
   value: string
}

const initialState: ISearchSlice = {
   value: ''
}

const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {
      setSearch(state, action) {
         state.value = action.payload
      }
   }
})

export default searchSlice.reducer
export const { setSearch } = searchSlice.actions