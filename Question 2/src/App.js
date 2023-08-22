import './App.css';
import TableData from './components/TableData';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <TableData data={data} />
    </div>
  );
}

export default App;
