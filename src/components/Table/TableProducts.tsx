import styled from '@emotion/styled';
import { Table, TableContainer } from '@mui/material';
import { FC } from 'react';
import Select from '../Select/Select';
import BodyTable from './BodyTable';
import HeadTable from './HeadTable';

const TableWrapper = styled(TableContainer)({
  background: 'white',
  borderRadius: 10,
  boxShadow: '0 0 14px #bdbdbd',
})

const TableProducts: FC = () => {
  return (
    <TableWrapper>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <HeadTable />
        <BodyTable />
      </Table>
    </TableWrapper>
  )
}

export default TableProducts