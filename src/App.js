import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GroceryList from './components/GroceryList';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function triggerDarkMode() {
    setDarkMode(!darkMode)
  }
  const darkClass = darkMode ? " bg-dark text-white" : ""
  return (
    <div className={"container" + darkClass}>
      <Header triggerDarkMode={triggerDarkMode}></Header>
      <GroceryList></GroceryList>
    </div>
  );
}

export default App;
