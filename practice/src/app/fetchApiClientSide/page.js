"use client"
import { useEffect, useState } from "react"
import Loading from "../fetchApiServerSide/loading"
import "../fetchApiServerSide/productLoading.css"

//Call API in Client Component - Video 18

export default function FetchApiClientSide() {
    console.log('Component rendered');
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllProducts = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setProduct(data.products)
            setLoading(false)
        }
        getAllProducts();

        // Show loader for 2 seconds on page load
        const loaderTimeout = setTimeout(() => {
            console.log('Timeout executed');
            setLoading(false)
        }, 2000)

        return () => clearTimeout(loaderTimeout)
    }, [])

    return (
        <>
            {
                loading ? (<Loading />)
                    :
                    (
                        <>
                            <h1>Product List</h1>

                            {product.map((item, index) => {
                                return (
                                    <h3 key={index}>Product : {item.title} &  Price {item.price}</h3>
                                )
                            })}
                        </>
                    )
            }
        </>
    )
}