

function MenuItem(props) { 
    const menuItemHTML = (
        
            <li>
                 <p>{props.name}</p>
                 <p>{props.description}</p>
                 <p>{props.price}</p>
                 <button type="button" name={props.name} onClick={handleChange}>Add Item</button> 
             </li>
        
    );
    
    function handleChange(event) {
        // event.preventDefault();
        console.log('you clicked it!');
        props.addToOrder(props.name, props.price);
    }

    return (
        <ul>
            {menuItemHTML}
        </ul>
    )
}

export default MenuItem



//what does it mean to be a menuitem (name description price)