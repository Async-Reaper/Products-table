import styled from '@emotion/styled';
import { Table, TableContainer } from '@mui/material';
import { FC } from 'react';
import Select from '../Select/Select';
import BodyTable from './BodyTable';
import HeadTable from './HeadTable';


const TableProducts: FC = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <HeadTable />
        <BodyTable />
      </Table>
    </TableContainer>
  )
}

export default TableProducts