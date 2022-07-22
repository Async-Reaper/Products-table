import { useMemo } from "react"

export const usePagination = (totalPages: number) => {
   const getCount = useMemo(() => {
      const arrCount: number[] = [];
      for (let i = 1; i < totalPages; i++) {
         arrCount.push(i)
      }

      return arrCount
   }, [totalPages])

   return getCount
}