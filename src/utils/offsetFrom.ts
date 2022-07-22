export const offsetFrom = (page: number, limit: number) => {
   if (page === 1) {
      return 0
   } else {
      return (page * limit - limit) + 1
   }
}