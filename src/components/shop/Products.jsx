import { useEffect, useState } from "react";
import Card from "./Card";
import product from '/src/styles/products.module.css'

function useProductsURL() {
    const [data, setData] = useState()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products', { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    },[])

    return { data, error, loading }
}

function Products() {
    const { data, error, loading } = useProductsURL()

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