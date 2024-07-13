"use client"

import axios from "axios"
import { toast } from "react-toastify"

export default async function DeleteUser({ id }) {

    const handleDeleteUser = async () => {
        await axios.delete(`http://localhost:3000/api/users/${id}`).then((res) => {
            toast.success(res.data.message)
            console.log("res===>", res)
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    return (
        <button onClick={handleDeleteUser}>DeleteUser</button>
    )
}
