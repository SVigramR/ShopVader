import { useOutletContext } from "react-router-dom";
import cartStyle from '../styles/cart.module.css'

function Cart() {
    const [cart, setCart] = useOutletContext()
    
    const sumTotal = () => {
        let sum = 0
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index].totalPrice();
            sum += Number(element)
        }
        return sum.toFixed(2)
    }

    const handlePurchase = () => {
        setCart([])
        alert("Order placed, Thank you for shopping in ShopVader")
    }

    if (cart.length) {
        return (
            <>
                <div className={cartStyle.cartPage}>
                <table className={cartStyle.listContainer}>
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Sum</th>
                    </tr>
                    {cart.map((item) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price}</td>
                                        <td>${item.totalPrice()}</td>
                                    </tr>
                                </>
                            )
                        })}
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Sum</td>
                                <td></td>
                                <td>${sumTotal()}</td>
                            </tr>
                        </tfoot>
                </table> 
                <button className={cartStyle.payout} onClick={handlePurchase}>PAYOUT</button>
                </div>
            </>
        ) 
    } else {
        return (
            <>
                <h2 className={cartStyle.cartPage}>Add Items to the Cart</h2>
            </>
        )
    }


}

export default Cart;