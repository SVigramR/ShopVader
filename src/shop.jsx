import { useState } from "react";
import Products from "./components/shop/Products";
import Category from "./components/Category";
import { useOutletContext } from "react-router-dom";

function ShopPage() {
    const {category, setCategory} = useOutletContext()

    return (
        <>
            <div>
                <Category category={"All"} setCategory={setCategory} url={'https://dummyjson.com/products'} type={"button"} />
                <Category category={"Groceries"} setCategory={setCategory} url={'https://dummyjson.com/products/category/groceries'} type={"button"} />
                <Category category={"Fragrances"} setCategory={setCategory} url={'https://dummyjson.com/products/category/fragrances'} type={"button"} />
                <Category category={"Cosmetic"} setCategory={setCategory} url={'https://dummyjson.com/products/category/beauty'} type={"button"} />
                <Category category={"Furniture"} setCategory={setCategory} url={'https://dummyjson.com/products/category/furniture'} type={"button"} />
            </div>
            <Products categoryURL={category} />
        </>
    )
}

export default ShopPage;