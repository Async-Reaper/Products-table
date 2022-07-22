import { AppDispatch } from "../store/store"
import axios from 'axios'
import { getProductFetch, getProductSuccess } from "../store/reducers/productReducer"
import { IProducts } from "../models/IProducts"
import { getTotalCountProduct } from "../store/reducers/paginationReducer"

export const getProduct = () => {

   return async (dispatch: AppDispatch) => {
      try {
         dispatch(getProductFetch())

         const response = await axios.get<IProducts[]>(`https://nutripro.ru:6443/survey/dish?range=[0, 150]`)
         const res = response.data

         dispatch(getTotalCountProduct(response.headers['content-range']))
         dispatch(getProductSuccess(res))

      } catch (error) {
         console.log(error)
      }
   }
}