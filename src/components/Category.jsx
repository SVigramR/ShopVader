import propTypes from 'prop-types';
import cate from '../styles/category.module.css'
import { useNavigate } from 'react-router-dom';

function Category({ category, setCategory, url, type, btnActive, setBtnActive}) {
        const navigate = useNavigate()

        const handleCardClick = (url, category) => {
            navigate('/shop');
            setCategory(url);
            setBtnActive(category)
        }

        const handleBtnClick = (url, category) => {
            setCategory(url)
            setBtnActive(category)
        }

        if (type === "card") {
            return (
                <>
                    <div className={cate.cardContainer}>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/groceries', "Groceries")} className={`${cate.card} ${cate.groceries}`}><h1 className={cate.links}>Groceries</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/fragrances', "Fragrances")} className={`${cate.card} ${cate.fragrances}`}><h1 className={cate.links}>Fragrances</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/beauty', "Cosmetics")} className={`${cate.card} ${cate.cosmetic}`}><h1 className={cate.links}>Cosmetic</h1></div>
                        <div onClick={() => handleCardClick('https://dummyjson.com/products/category/furniture', "Furniture")}className={`${cate.card} ${cate.furniture}`}><h1 className={cate.links}>Furniture</h1></div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <button onClick={() => handleBtnClick(url, category)} className={`${cate.btn} ${btnActive === category ? cate.btnActive : ''}`}>{category}</button>
                </>
            )
        }

}

Category.propTypes = {
    type: propTypes.string.isRequired,
}

export default Category;