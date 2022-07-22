import './App.css';
import Pagination from './components/Pagination/Pagination';
import Settings from './components/Settings/Settings';
import TableProducts from './components/Table/TableProducts';
import { usePagination } from './hooks/usePagination';
import { useSearch } from './hooks/useSearch';
import { useTypedSelector } from './hooks/useTypedSelector';
import { getPageCount } from './utils/page';



function App() {
  const { products } = useTypedSelector(state => state.products)
  const { limit, currentPage } = useTypedSelector(state => state.pagination)
  const { value } = useTypedSelector(state => state.search)

  const res = useSearch(products, value)
  const pages = usePagination(getPageCount(res.length, limit))

  console.log(getPageCount(res.length, limit))
  return (
    <div className="App">
      <Settings />
      <TableProducts />
      <Pagination pages={pages} currentPage={currentPage} />
    </div>
  );
}

export default App;
