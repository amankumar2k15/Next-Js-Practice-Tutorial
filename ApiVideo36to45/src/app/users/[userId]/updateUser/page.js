"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function UpdateUser({ params }) {
    const userId = params.userId

    const [initialData, setInitialData] = useState({
        name: "",
        email: "",
        age: ""
    })

    const handleInput = (e) => {
        const { value, id } = e.target
        setInitialData((preVal) => ({ ...preVal, [id]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:3000/api/users/${userId}`, initialData).then((res) => {
            console.log(res)
            toast.success(res.data.message)
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }


    const getAllUsers = async (userId) => {
        await axios.get(`http://localhost:3000/api/users/${userId}`).then((res) => {
            const result = res.data.result
            console.log("result===>", result)
            setInitialData({
                name: result.name,
                email: result.email,
                age: result.age
            })
            console.log("gettingUser==>", res.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        getAllUsers(userId)
    }, [])

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Update your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        defaultValue={initialData.name}
                                        className="bg-gray-50 border border-gray-300 text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        defaultValue={initialData.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white" >
                                        Age
                                    </label>
                                    <input
                                        type="age"
                                        name="age"
                                        id="age"
                                        defaultValue={initialData.age}
                                        className="bg-gray-50 border border-gray-300 text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleInput}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Update an account
                                </button>
                                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login here
                                    </a>
                                </p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}