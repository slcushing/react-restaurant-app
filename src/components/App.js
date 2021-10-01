// import MenuItem from './MenuItem'
import {useState, useEffect} from 'react';
import MenuList from './MenuList'
import menuItems from './utilities/menu.js'
import Order from './Order'


function App() {  
  const [order, setOrder] = useState([]);

  useEffect(() =>
    setOrder([

    ])
  
  )



  
  return (
  
    <div className="App">
     <MenuList menuItems={menuItems} />
     <Order  />
    </div>
  );
}

export default App
