import MenuItem from './MenuItem'

function MenuList(props) {
    console.log(props);
   
    const MenuListHTML = props.menuItems.map(menuItem => 
    <MenuItem key={menuItem.id} {...menuItem}/>)


    return(
        <section>{MenuListHTML}</section>
    );

};

export default MenuList