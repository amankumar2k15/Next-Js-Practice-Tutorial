"use client"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

export default function AddUser() {
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
        // const data = await fetch("http://localhost:3000/api/users", {
        //     method: "POST",
        //     body: JSON.stringify(initialData)
        // });
        // const response = await data.json()
        // if (response) {
        //     toast.success(response.message)
        // }
        await axios.post("http://localhost:3000/api/users", initialData).then((res) => {
            console.log(res)
            toast.success(res.data.message)
        }).catch((err) => {
            toast.error(err.response.data.message)
        })

    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={initialData.name}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John Smith"
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
                                        value={initialData.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
                                        Age
                                    </label>
                                    <input
                                        type="text"
                                        name="age"
                                        id="age"
                                        placeholder="enter your age"
                                        value={initialData.age}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={handleInput}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
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