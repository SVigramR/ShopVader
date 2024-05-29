import { useState, useRef } from 'react';
import quant from '/src/styles/quantity.module.css'

function Quantity() {
    const [quantity, setQuantity] = useState(0);
   
    const increment = () => setQuantity((countValue) => countValue + 1);
    const decrement = () => setQuantity((countValue) => countValue - 1);

    return (
        <>
            <div className={quant.quant}>
                <div className={quant.count}>
                    <button disabled={quantity <= 0} className={quant.quantControl} onClick={decrement}>-</button>
                    <p className={quant.result}>{quantity}</p>
                    <button  disabled={quantity >= 100} className={quant.quantControl} onClick={increment}>+</button>
                </div>
                <button className={quant.btn} >Cart</button>
            </div>
        </>
    )
}

export default Quantity;