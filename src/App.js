import './App.css';
import image from './shopping.jpg';
import imageTwo from './man.jpg'
import { GrocerList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src = { image } alt = "grocery" width = "200px"/>
      </div>
      <div className='container'>
        <h2>Grocery List</h2>
      </div>
      <GrocerList/>
      <div className='container'>
        <img src = { imageTwo } alt = "man" width="200px"/>
      </div>
    </div>
  );
}

export default App;
