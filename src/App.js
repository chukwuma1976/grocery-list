import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GroceryList from './components/GroceryList';
import { useState } from 'react';
import GroceryListByCategory from './components/GroceryListByCategory';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

export const GroceryContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [groceryList, setGroceryList] = useState([]);

  const darkClass = darkMode ? " bg-dark text-white" : ""

  return (
    <div className={"container" + darkClass}>
      <GroceryContext.Provider value={{ groceryList: groceryList, setGroceryList: setGroceryList }}>
        <Header
          triggerDarkMode={() => setDarkMode(!darkMode)}>
        </Header>
        <h1>&nbsp;</h1>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/grocery-home' element={<HomePage />} />
          <Route path='/grocery-list' element={<GroceryList />} />
          <Route path='/grocery-list-by-category' element={<GroceryListByCategory />} />
        </Routes>
      </GroceryContext.Provider>
    </div>
  );
}

export default App;
