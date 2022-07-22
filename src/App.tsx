import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import './App.css';
import Select from './components/Select/Select';
import TableProducts from './components/Table/TableProducts';
import { usePagination } from './hooks/usePagination';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { useTypedSelector } from './hooks/useTypedSelector';
import { setPage } from './store/reducers/paginationReducer';
import { getPageCount } from './utils/page';

const PaginationWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})

function App() {
  const { totalCountItem, limit, currentPage } = useTypedSelector(state => state.pagination)
  const pages = usePagination(getPageCount(totalCountItem, limit))
  const dispatch = useTypedDispatch()
  return (
    <div className="App">
      <div className='settings'>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Select />
      </div>
      <TableProducts />
      <PaginationWrapper>
        {pages.map(page => <p key={page} onClick={() => dispatch(setPage(page))} className={currentPage === page ? 'page page__current' : 'page'}>{page}</p>)}
      </PaginationWrapper>
    </div>
  );
}

export default App;
