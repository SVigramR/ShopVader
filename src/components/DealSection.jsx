import deals from '../styles/deals.module.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Category from './Category';

function Deals() {
    const {category, setCategory, btnActive, setBtnActive} = useOutletContext()
    
    return (
        <>
            <div className={deals.deal}>
                <div className={deals.dealInfo}>
                    <h1>🛒 Ready to Save?</h1>
                    <p>Start adding items to your cart now and take advantage of the best deals around. Happy shopping!</p>
                </div>
                <Category category={category} setCategory={setCategory} type={'card'} btnActive={btnActive} setBtnActive={setBtnActive} />
            </div>
        </>
    )
}

export default Deals;