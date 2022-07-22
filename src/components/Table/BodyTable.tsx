import { TableBody, TableCell, TableRow } from '@mui/material'
import React, { FC, useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { getProduct } from '../../service/getProduct'
import { offset } from '../../utils/offset'
import { offsetFrom } from '../../utils/offsetFrom'

const BodyTable: FC = () => {
   const { products } = useTypedSelector(state => state.products)
   const { limit, currentPage } = useTypedSelector(state => state.pagination)
   const dispatch = useTypedDispatch()

   useEffect(() => {
      dispatch(getProduct(offsetFrom(currentPage, limit), offset(limit, currentPage)))
   }, [limit, currentPage])

   return (
      <TableBody>
         {products.map((product) => (
            <TableRow
               key={product.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell component="th" scope="row">
                  {product.id}
               </TableCell>
               <TableCell align="right">{product.name}</TableCell>
               <TableCell align="right">{product.standart_serving}</TableCell>
            </TableRow>
         ))}
      </TableBody>
   )
}

export default BodyTable