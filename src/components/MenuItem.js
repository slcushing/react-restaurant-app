function MenuItem(props) { 
    const menuItemHTML = (
        
            <li>
                 <p>{props.name}</p>
                 <p>{props.description}</p>
                 <p>{props.price}</p>
                 <button type="button" name={props.name}>Add Item</button> 
             </li>
        
    );
    //need onClick on the button above
    
    // function handleClick(event) {
    // }

    return (
        <ul>
            {menuItemHTML}
        </ul>
    )
}

export default MenuItem



//what does it mean to be a menuitem (name description price)