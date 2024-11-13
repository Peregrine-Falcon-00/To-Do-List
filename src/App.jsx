import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './components/AddItem';
import DisplayItems from './components/DisplayItems';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (text, date) => {
    const newItem = { text, date };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <center>
        <h1>To-Do List</h1>
        <AddItem onAddItem={addItem} />
        <DisplayItems items={items} />
      </center>
    </div>
  );
}

export default App;
