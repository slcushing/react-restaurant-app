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
  // const [filter, setFilter] = useState();
  
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

// function filterTag(event) {
//   if(event.target.value === 'all') {
//       setFilter(null)
//   } else {
//       setFilter(event.target.value);
//   }
// }

  
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
        <h1>NONNA'S KITCHEN</h1>
      </header>
     <div className="container" style={{ backgroundImage: "url(images/table-background.jpeg)" }}>
     <MenuList menuItems={menuItems} order={order} setOrder={setOrder} addToCart={addToCart}/>
     <Order  order={order} setOrder={setOrder} addToCart={addToCart} addOrder={addOrder}/>
     </div>
    </div>
  )
}

export default App;
