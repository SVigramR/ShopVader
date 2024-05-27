import propTypes from 'prop-types';
import cate from '../styles/category.module.css'

function Category({ category, type }) {
    if (type === 'card') {
        return (
            <>
                <div className={cate.card}>
                    <h1 className={cate.head}>{category}</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                <button className={cate.btn}>{category}</button>
            </>
        )
    }
}

Category.propTypes = {
    category: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
}

export default Category;