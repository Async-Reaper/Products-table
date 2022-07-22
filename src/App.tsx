import { TextField } from '@mui/material';
import './App.css';
import Select from './components/Select/Select';
import TableProducts from './components/Table/TableProducts';
import { usePagination } from './hooks/usePagination';
import { useTypedSelector } from './hooks/useTypedSelector';
import { getPageCount } from './utils/page';

function App() {
  const { totalCountItem, limit } = useTypedSelector(state => state.pagination)
  const pages = usePagination(getPageCount(totalCountItem, limit))

  return (
    <div className="App">
      <div className='settings'>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Select />
      </div>
      <TableProducts />
      <div>
        {pages.map(page => <p>{page}</p>)}
      </div>
    </div>
  );
}

export default App;
