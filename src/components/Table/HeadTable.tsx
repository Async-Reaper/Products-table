import { TableCell, TableHead, TableRow } from '@mui/material'
import React, { FC } from 'react'

const HeadTable: FC = () => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Standart serving</TableCell>
         </TableRow>
      </TableHead>
   )
}

export default HeadTable