import { TextField } from '@mui/material';
import './App.css';
import TableProducts from './components/Table/TableProducts';

function App() {

  return (
    <div className="App">
      <TextField id="standard-basic" label="Поиск" variant="standard" />
      <TableProducts />
    </div>
  );
}

export default App;
