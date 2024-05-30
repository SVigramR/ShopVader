import { useOutletContext } from "react-router-dom";

function Cart() {
    const [cart, setCart] = useOutletContext()
    
    const totalPrice = (price, quantity) => {
        let mul = price * quantity
        let deci = mul.toFixed(2)
        return deci
    }
    return (
        <>
            <div>
                <div>
                    {cart.map((item) => {
                        return (
                            <>
                                <h1>{item.title}</h1>
                                <p>{item.quantity}</p>
                                <p>{item.category}</p>
                                <p>{item.price}</p>
                                <p>{totalPrice(item.price, item.quantity)}</p>
                            </>
                        )
                    })}
                </div>
                <button onClick={() => setCart([])}>PAYOUT</button>
            </div>
        </>
    ) 
}

export default Cart;