import Quantity from "./Quantity";
import card from '/src/styles/card.module.css';

function Card({ item }) {
    return (
        <>
            <div className={card.card}>
                <img src={item.images[0]} alt={item.title} />
                <div className={card.info}>
                    <div>
                        <p>{item.title}</p>
                        <p className={card.price}>${item.price}</p>
                    </div>
                    <Quantity item={item} />
                </div>
            </div>
        </>
    )
}

export default Card;