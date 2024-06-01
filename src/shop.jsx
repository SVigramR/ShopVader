import shop from "./styles/shop.module.css"
import Products from "./components/shop/Products";
import Category from "./components/Category";
import { useOutletContext } from "react-router-dom";

function ShopPage() {
    const {category, setCategory, btnActive, setBtnActive} = useOutletContext()

    return (
        <>
            <div className={shop.container}>
                <Category category={"All"} setCategory={setCategory} url={'https://dummyjson.com/products'} type={"button"} btnActive={btnActive} setBtnActive={setBtnActive} />
                <Category category={"Groceries"} setCategory={setCategory} url={'https://dummyjson.com/products/category/groceries'} type={"button"} btnActive={btnActive} setBtnActive={setBtnActive} />
                <Category category={"Fragrances"} setCategory={setCategory} url={'https://dummyjson.com/products/category/fragrances'} type={"button"} btnActive={btnActive} setBtnActive={setBtnActive} />
                <Category category={"Cosmetics"} setCategory={setCategory} url={'https://dummyjson.com/products/category/beauty'} type={"button"} btnActive={btnActive} setBtnActive={setBtnActive} />
                <Category category={"Furniture"} setCategory={setCategory} url={'https://dummyjson.com/products/category/furniture'} type={"button"} btnActive={btnActive} setBtnActive={setBtnActive} />
            </div>
            <Products categoryURL={category} />
        </>
    )
}

export default ShopPage;