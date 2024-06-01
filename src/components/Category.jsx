import propTypes from 'prop-types';
import cate from '../styles/category.module.css'
import { useNavigate } from 'react-router-dom';

function Category({ category, setCategory, url, type}) {
        const navigate = useNavigate()

        const handleCardClick = (url) => {
            navigate('/shop');
            setCategory(url);
        }

        if (type === "card") {
            return (
                <>
                    <div className={cate.cardContainer}>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/groceries')} className={`${cate.card} ${cate.groceries}`}><h1 className={cate.links}>Groceries</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/fragrances')} className={`${cate.card} ${cate.fragrances}`}><h1 className={cate.links}>Fragrances</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/beauty')} className={`${cate.card} ${cate.cosmetic}`}><h1 className={cate.links}>Cosmetic</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/furniture')}className={`${cate.card} ${cate.furniture}`}><h1 className={cate.links}>Furniture</h1></div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={() => setCategory(url)} className={cate.btn}>{category}</button>
                </>
            )
        }

}

Category.propTypes = {
    type: propTypes.string.isRequired,
}

export default Category;