import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import GroceryList from './components/GroceryList';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <GroceryList></GroceryList>
    </div>
  );
}

export default App;
