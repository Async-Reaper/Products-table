import { AppDispatch } from "../store/store"
import axios from 'axios'
import { getProductFetch, getProductSuccess, getTotalCountPage } from "../store/reducers/productReducer"
import { IProducts } from "../models/IProducts"

export const getProduct = (from: number, before: number) => {

   return async (dispatch: AppDispatch) => {
      try {
         dispatch(getProductFetch())
         const response = await axios.get<IProducts[]>(`https://nutripro.ru:6443/survey/dish?range=[${from}, ${before}]`)
         const res = response.data
         dispatch(getTotalCountPage(response.headers['content-range']))
         dispatch(getProductSuccess(res))
         console.log(response.headers['content-range'])
      } catch (error) {
         console.log(error)
      }
   }
}