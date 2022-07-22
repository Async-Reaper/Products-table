import { TextField } from '@mui/material';
import './App.css';
import Select from './components/Select/Select';
import TableProducts from './components/Table/TableProducts';

function App() {

  return (
    <div className="App">
      <div className='settings'>
        <TextField id="standard-basic" label="Поиск" variant="standard" />
        <Select />
      </div>
      <TableProducts />
    </div>
  );
}

export default App;
