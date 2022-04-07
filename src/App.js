import { useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {

  const [value, setValue] = useState('')
 
  return (
    <div className="App">
      <header className="App-header">
        {value}
        <Child handlerValue={setValue} />
      </header>
    </div>
  );
}

export default App;
