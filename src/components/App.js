// import MenuItem from './MenuItem'
import {useState} from 'react';
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
      
     <MenuList menuItems={menuItems} order={order} setOrder={setOrder} addToCart={addToCart}/>
     <Order  order={order} setOrder={setOrder} addToCart={addToCart} addOrder={addOrder}/>
    </div>
  )
}

export default App;
