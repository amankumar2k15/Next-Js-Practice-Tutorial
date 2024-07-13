import axios from "axios"
import Link from "next/link"
import { SyncLoader } from "react-spinners";
import DeleteProduct from "./deleteProduct/DeleteProduct";

const getProduct = async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/products", { cache: "no-cache" })
        if (res) {
            return res.data.result || []
        } else {
            return { success: false }
        }
    } catch (err) {
        console.log(err)
        return [];
    }
}


export default async function Page() {
    const products = await getProduct() || [];
    return (
        <div className="w-full container mx-auto mt-24">
            {products ? (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {
                                    ["Product name", "Price", "Color", "Category", "Company", "Action"].map((item, index) => {
                                        return (
                                            <th scope="col" key={index} className="px-6 py-3">
                                                {item}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {products && products?.map((item, index) => {
                                return (
                                    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {item.name}
                                        </th>
                                        <td className="px-6 py-4">{item.price}</td>
                                        <td className="px-6 py-4">{item.color}</td>
                                        <td className="px-6 py-4">{item.category}</td>
                                        <td className="px-6 py-4">{item.company}</td>
                                        <td className="px-6 py-4">
                                            {/* //Link ke ander ka product/   ==> ye product hai iss folder ka name  */}
                                            <Link
                                                href={`product/${item._id}`}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Edit
                                            </Link>
                                            <DeleteProduct id={item._id} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
                :
                (
                    <SyncLoader size={14} color="#fff" />
                )
            }


        </div>
    );


}