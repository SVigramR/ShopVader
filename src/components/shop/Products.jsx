import { useEffect, useState } from "react";
import Card from "./Card";
import product from '/src/styles/products.module.css'
// import { useResolvedPath } from "react-router-dom";

function useProductsURL(url) {
    const [data, setData] = useState()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    },[url])

    return { data, error, loading }
}

function Products({categoryURL}) {
    const { data, error, loading } = useProductsURL(categoryURL)

    if (loading) return <p className={product.expand}>Loading...</p>;
    if (error) return <p className={product.expand}>A network error was encountered</p>;

    return (
        <>
            <div className={product.container}>
                {data.map((item, index) => {
                    return (
                        <>
                            <Card key={index} item={item} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Products;