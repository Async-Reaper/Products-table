import { useMemo } from "react";
import { IProducts } from "../models/IProducts";

export const useSearch = (products: IProducts[], search: string) => {

   const getSearch = useMemo(() => {
      if (search.length > 3) {
         return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
      } else {
         return products
      }

   }, [products, search])

   return getSearch
}