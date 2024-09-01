import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GroceryList from './components/GroceryList';
import { useState } from 'react';
import GroceryListByCategory from './components/GroceryListByCategory';
import { createContext } from 'react';

export const GroceryContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayByCategory, setDisplayByCategory] = useState(false);
  const [groceryList, setGroceryList] = useState([]);

  const darkClass = darkMode ? " bg-dark text-white" : ""

  return (
    <div className={"container" + darkClass}>
      <Header
        triggerDarkMode={() => setDarkMode(!darkMode)}
        triggerDisplayByCategory={() => setDisplayByCategory(!displayByCategory)}>
      </Header>
      <GroceryContext.Provider value={{ groceryList: groceryList, setGroceryList: setGroceryList }}>
        {displayByCategory ? <GroceryListByCategory></GroceryListByCategory> : <GroceryList></GroceryList>}
      </GroceryContext.Provider>
    </div>
  );
}

export default App;
