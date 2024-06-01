import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import quant from '/src/styles/quantity.module.css'

function Quantity({ item }) {
    const [quantity, setQuantity] = useState(0);
    const {cart, setCart} = useOutletContext()
   
    const increment = () => setQuantity((countValue) => countValue + 1);
    const decrement = () => setQuantity((countValue) => countValue - 1);

    const handleCart = () => {
        const newCart = {
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            totalPrice: function () {
                let mul = this.price * this.quantity
                let deci = mul.toFixed(2)
                return deci
            },
            quantity: quantity,
        }
        const findItem = cart.find((element) => element.id === item.id)
        if (findItem === undefined) {
            setCart([ ...cart, newCart])
        } else {
            const currentCartIndex = cart.findIndex((todo) => todo.id === item.id); 
            const updatedCart = { ...findItem, quantity: findItem.quantity + quantity };
            const appendCart = [
                ...cart.slice(0, currentCartIndex),
                updatedCart,
                ...cart.slice(currentCartIndex + 1)
              ];
            setCart(appendCart)
        }
    }

    return (
        <>
            <div className={quant.quant}>
                <div className={quant.count}>
                    <button disabled={quantity <= 0} className={quant.quantControl} onClick={decrement}>-</button>
                    <p className={quant.result}>{quantity}</p>
                    <button  disabled={quantity >= 100} className={quant.quantControl} onClick={increment}>+</button>
                </div>
                <button className={quant.btn} onClick={handleCart}>Cart</button>
            </div>
        </>
    )
}

export default Quantity;