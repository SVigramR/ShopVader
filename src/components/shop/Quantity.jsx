import quant from '/src/styles/quantity.module.css'

function Quantity() {
    return (
        <>
            <div className={quant.quant}>
                <div>
                    <button className={quant.quantControl}>-</button>
                    <input type="text" defaultValue={0} />
                    <button className={quant.quantControl}>+</button>
                </div>
                <button className={quant.btn}>Cart</button>
            </div>
        </>
    )
}

export default Quantity;