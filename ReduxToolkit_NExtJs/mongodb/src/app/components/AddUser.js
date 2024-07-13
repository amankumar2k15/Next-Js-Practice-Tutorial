"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/userslice"


export default function AddUser() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const handleUserDispatch = () => {
        dispatch(addUser(name))
        setName("")
    }

    return (
        <div className="add px-4 h-[200px] p-[10px] pl-10 border-2 border-black">
            <h3 className="text-2xl">User List</h3>
            <input type="text"
                placeholder="Add new user"
                className="w-[250px] h-[35px] block border border-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button className="w-[250px] h-[35px] block mt-[20px] bg-red-700"
                onClick={handleUserDispatch}
            >
                Add User
            </button>
        </div>
    )
}