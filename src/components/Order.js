import {useState} from 'react'

function Order(props) {
    
    const orderHTML = props.order.map((order, index) => 
        <div key={index}> 
            <p>{order.name} {order.price}</p>
        </div>
    );//get name and price to show up...
    

    const[name, setName] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.addToOrder(props.order, name, phoneNumber);
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
        
        return total;
    }

    return (
        <>
        <aside className="order-panel">
        
        {orderHTML}
        <p> Your total: {subtotal()} </p>
        
        <p>Enter your name and phone number below. Please review your order carefully before you click Submit Your Order.</p>
        <form onSubmit={handleSubmit}>
            <input name="text" type="text" id="full-name" value={name} onChange={handleNameChange} placeholder="Full Name"></input>
            <input name="text" type="text" id="phone-number" value={phoneNumber} onChange={handleNumberChange} placeholder="Phone Number"></input>
            <button type="submit">Submit Your Order</button>
        </form>
        </aside>
        
        </>
    )
    
}

export default Order