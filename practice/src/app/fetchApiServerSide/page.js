import Product from "./product";

async function getAllProducts() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json()
    return data.products
}

//Call API in server Component - Video 19 
// Use Client component with server component - Video 20

export default async function fetchApiServerSide() {
    const products = await getAllProducts()
    return (
        <>
            <h1>List of the products of Server Side API data</h1>

            {products?.map((item, index) => {
                return (
                    <>
                        <h3 key={index}>Product : {item.title} </h3>
                        <Product price={item.price} />
                    </>
                )
            })}
        </>
    )
}