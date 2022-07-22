import { AppDispatch } from "../store/store"
import axios from 'axios'
export const getProduct = (from: number, before: number) => {
   return async (dispatch: AppDispatch) => {
      try {
         const response = await axios.get(`https://nutripro.ru:6443/survey/dish?range=[${from}, ${before}]`)
      } catch (error) {
         console.log(error)
      }
   }
}