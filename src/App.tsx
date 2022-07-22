import './App.css';
import Pagination from './components/Pagination/Pagination';
import Settings from './components/Settings/Settings';
import TableProducts from './components/Table/TableProducts';
import { usePagination } from './hooks/usePagination';
import { useTypedSelector } from './hooks/useTypedSelector';
import { getPageCount } from './utils/page';



function App() {
  const { products } = useTypedSelector(state => state.products)
  const { limit, currentPage } = useTypedSelector(state => state.pagination)
  const pages = usePagination(getPageCount(products.length + 1, limit))

  return (
    <div className="App">
      <Settings />
      <TableProducts />
      <Pagination pages={pages} currentPage={currentPage} />
    </div>
  );
}

export default App;
