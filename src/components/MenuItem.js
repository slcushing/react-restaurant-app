

function MenuItem(props) { 
    const menuItemHTML = (
        
            <li className="menu-item">
                 <h3>{props.name}</h3>
                 <p>{props.description}</p>
                 <p>{props.price}</p>
                 <button type="button" name={props.name} onClick={handleChange}>Add Item</button> 
             </li>
        
    );
    
    function handleChange(event) {
        event.preventDefault();
        // console.log('you clicked it!');
        props.addToCart(props.name, props.price);
    }

    return (
        <ul className="menu-list">
            {menuItemHTML}
        </ul>
    )
}

export default MenuItem



//what does it mean to be a menuitem (name description price)