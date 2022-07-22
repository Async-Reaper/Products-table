import { TableCell, TableHead, TableRow } from '@mui/material'
import React, { FC } from 'react'

const HeadTable: FC = () => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>
               <strong>ID</strong>
            </TableCell>
            <TableCell align="right">
               <strong>Name</strong>
            </TableCell>
            <TableCell align="right">
               <strong>Standart serving</strong>
            </TableCell>
         </TableRow>
      </TableHead>
   )
}

export default HeadTable