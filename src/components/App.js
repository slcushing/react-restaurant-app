// import MenuItem from './MenuItem'
import {useState} from 'react';
import "./App.css";
import MenuList from './MenuList'
import menuItems from './utilities/menu.js'
import Order from './Order'


const BASE_URL = "https://tiny-taco-server.herokuapp.com/nonnas-kitchen/";


function App() {  
  // const [menuItems, setMenuItems] = useState(menuItems);
  const [order, setOrder] = useState([]);
  // const [selection, setSelection] = useState('Appetizer')
  
  
  function addToCart(name, price) {
    const newOrder = {name, price};
    setOrder([...order, newOrder])
  }

  async function addOrder(order, name, phoneNumber) {
    const newOrder = {order, name, phoneNumber};
    // setOrder([...order, newOrder])
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    }, 
      body: JSON.stringify(newOrder),
  });

    if (response.ok) {
      const data = await response.json();
      setOrder([...order, data]);
    }
  }

  const [selection, setSelection] = useState('appetizer')
  
  
  if (selection === 'appetizer') {
    menuItems.catgory = "Appetizer"
  } else if (selection === 'entrees') {
    menuItems.category = "Entree"
  } else if (selection === 'desserts') {
    menuItems.category = "Dessert"
  } else if (selection === 'drinks') {
    menuItems.category = "Drink"
  };




  return (
  
    <div className="App">
      <header className="header">
        <nav>
          <ul className="nav-bar">
            <li>Home</li>
            <li>About Us </li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <h1>Nonna's Kitchen</h1>
      </header>
      <nav className="category-bar">
        <button type="submit" className="appetizer" onClick={() => setSelection("Appetizer")}>Appetizers</button>
        <button type="submit" className="entrees">Entrees</button>
        <button type="sumbit" className="desserts">Desserts</button>
        <button type="submit" className="drinks">Drinks</button>
      </nav>
     <div className="container">
     <MenuList menuItems={menuItems} order={order} setOrder={setOrder} addToCart={addToCart}/>
     <Order  order={order} setOrder={setOrder} addToCart={addToCart} addOrder={addOrder}/>
     </div>
     <div className="pic-ribbon">
        <img src="./images/basil.jpeg" alt="" />
        <img src="./images/spaghetti.jpeg" alt="" />
        <img src="./images/cannoli.jpeg" alt="" />
        <img src="./images/espresso2.jpeg" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
     </div>
    </div>
  )
}

export default App;
