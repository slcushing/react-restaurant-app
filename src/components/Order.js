import {useState} from 'react'
import FormatPrice from "./utilities/FormatPrice";

function Order(props) {
    
    const orderHTML = props.order.map((order, index) => {
        return (
        <div key={index} className="added-item"> 
            <p>{order.name} {FormatPrice(order.price)}</p>
        </div>
        );
    });
    

    const[name, setName] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    // const[newOrder, setNewOrder] = useState(props.order)

    function handleSubmit(event) {
        event.preventDefault();
        props.addOrder(props.order, name, phoneNumber);
        setName("");
        setPhoneNumber("");
    }

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleNumberChange(event) {
        setPhoneNumber(event.target.value)
    }

    function subtotal() {
        let total = 0;
        props.order.forEach((order) => {
            total = total + order.price;
        });
        
        return FormatPrice(total);
    }

    return (
        <aside className="order-panel">
        
        {orderHTML}
        <p id="subtotal"> Your order total: {subtotal()} </p>
        
        <p>Enter your name and phone number below. Please review your order carefully before you submit your order.</p>
        <form onSubmit={handleSubmit}>
            <input name="text" type="text" id="full-name" value={name} onChange={handleNameChange} placeholder="Full Name"></input>
            <input name="text" type="text" id="phone-number" value={phoneNumber} onChange={handleNumberChange} placeholder="Phone Number"></input>
            <button type="submit" className="submit-order">Submit Your Order</button>
        </form>
        </aside>
        
    )
    
};

export default Order