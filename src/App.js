import { useState } from 'react';
import './App.css';
import Child from './components/Child';
import Child2 from './components/Child2';

function App() {

  const [value, setValue] = useState(0)
 
  return (
    <div className="App">
      <header className="App-header">
        {value}
        <Child handlerValue={setValue} value={value} />
        <Child2 handlerValue={setValue} value={value} />
      </header>
    </div>
  );
}

export default App;
