import { AppDispatch } from "../store/store"
import axios from 'axios'
import { getProductFetch, getProductSuccess } from "../store/reducers/productReducer"
import { IProducts } from "../models/IProducts"
import { getTotalCountPage } from "../store/reducers/paginationReducer"

export const getProduct = (from: number, before: number) => {

   return async (dispatch: AppDispatch) => {
      try {
         dispatch(getProductFetch())

         const response = await axios.get<IProducts[]>(`https://nutripro.ru:6443/survey/dish?range=[${from}, ${before}]`)
         const res = response.data

         dispatch(getTotalCountPage(response.headers['content-range']))
         dispatch(getProductSuccess(res))

      } catch (error) {
         console.log(error)
      }
   }
}