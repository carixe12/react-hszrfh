import React, { useState } from 'react';
import './style.css';
import './config/i18next-config';
import {useTranslation} from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation();
  const [newItem, setNewItem] = useState();
  const [items, setItems] = useState([]);

  function changeToEnglish() {
    i18n.changeLanguage('en')
  }

  function addItem() {
    if (!newItem) {
      alert('enter new claudio');
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldlist) => [...oldlist, item]);
    setNewItem();
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1> Todo Claudio List</h1>
      {t ('title', { name: 'claudio'})}
      <p> Actual Language: {i18n.language}</p>
      
      <input
        type="text"
        plaveholder="Add a new claudio..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{' '}
              <button className="btn" onClick={() => deleteItem(item.id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
