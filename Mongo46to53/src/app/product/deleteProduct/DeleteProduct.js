"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function DeleteProduct({ id }) {
    const router = useRouter()

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3000/api/products/${id}`).then((res) => {
            toast.success(res.data.message)
            router.push("/product")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <button
            className="font-medium ml-2 text-red-600 dark:text-red-500 hover:underline"
            onClick={handleDelete}
        >
            Delete
        </button>
    )
}