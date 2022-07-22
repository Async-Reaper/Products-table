import styled from '@emotion/styled';
import { Table, TableContainer } from '@mui/material';
import { FC } from 'react';
import Select from '../Select/Select';
import BodyTable from './BodyTable';
import HeadTable from './HeadTable';

const SelectWrapper = styled('div')({
  display: 'flex',
  margin: '15px 0 0 auto;',
  maxWidth: 85,
})

const TableProducts: FC = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <HeadTable />
        <BodyTable />
      </Table>
      <SelectWrapper>
        <Select />
      </SelectWrapper>
    </TableContainer>
  )
}

export default TableProducts