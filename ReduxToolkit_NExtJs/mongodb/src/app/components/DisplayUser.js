"use client"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../redux/userslice"

export default function DisplayUser() {
    const dispatch = useDispatch()
    const { users: userData } = useSelector((state) => state.user)

    return (
        <div className="add px-4 h-[200px] p-[10px] pl-10 border-2 border-black">
            <h3 className="text-2xl">User List</h3>
            {userData?.map((item) => {
                return (
                    <div className="bg-gray-300 w-[200px] gap-2 mt-2 flex justify-between" key={item.id}>
                        <span>{item.name}</span>
                        <button
                            className=" text-sm text-white rounded-md px-2 py-2 bg-red-500 "
                            onClick={() => dispatch(deleteUser(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                )
            })}

        </div>
    )
}