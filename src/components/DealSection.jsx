import deals from '../styles/deals.module.css';
import Category from './Category';

function Deals() {
    return (
        <>
            <div className={deals.deal}>
                <div className={deals.dealInfo}>
                    <h1>🛒 Ready to Save?</h1>
                    <p>Start adding items to your cart now and take advantage of the best deals around. Happy shopping!</p>
                </div>
                <div className={deals.cardContainer}>
                    <Category category={'Electronics'} type={'card'} />
                    <Category category={'Clothes'} type={'card'} />
                    <Category category={'Shoes'} type={'card'} />
                    <Category category={'Furniture'} type={'card'} />
                </div>
            </div>
        </>
    )
}

export default Deals;