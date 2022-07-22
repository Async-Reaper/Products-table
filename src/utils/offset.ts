export const offset = (limit: number, page: number) => {
   if (page === 1) {
      return limit + 1
   } else {
      return limit * page + 2
   }
}