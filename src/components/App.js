// import MenuItem from './MenuItem'
import {useState} from 'react';
import MenuList from './MenuList'
import menuItems from './utilities/menu.js'
import Order from './Order'


function App() {  
  // const [menuItems, setMenuItems] = useState(menuItems);
  const [order, setOrders] = useState([]);

  function addToOrder(name, price) {
    const newOrder = {name, price}
    setOrders([...order, newOrder])
    // console.log("ORDER");
  }



  
  return (
  
    <div className="App">
     <MenuList menuItems={menuItems} addToOrder={addToOrder}/>
     <Order  />
    </div>
  );
}

export default App
