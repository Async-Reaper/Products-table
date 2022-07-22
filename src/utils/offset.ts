export const offset = (limit: number, page: number) => {
   if (page === 1) {
      return limit
   } else {
      return limit * page + 1
   }
}