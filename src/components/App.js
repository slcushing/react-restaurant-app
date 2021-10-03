// import MenuItem from './MenuItem'
import {useState} from 'react';
import MenuList from './MenuList'
import menuItems from './utilities/menu.js'
import Order from './Order'


function App() {  
  // const [menuItems, setMenuItems] = useState(menuItems);
  const [order, setOrders] = useState([]);
  // const [filter, setFilter] = useState();
  // const [subtotal, setSubtotal] = useState(0);

  function addToOrder(name, price) {
    const newOrder = {name, price}
    setOrders([...order, newOrder])
    // console.log("ORDER");
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
      
     <MenuList menuItems={menuItems} addToOrder={addToOrder}/>
     <Order  order={order} addToOrder={addToOrder}/>
    </div>
  );
}

export default App


