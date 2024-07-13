"use client"
import { useRouter } from "next/navigation"

const About = () => {
    const router = useRouter()

    return (
        <div className=" flex flex-col justify-center items-center h-screen gap-4">
            <div className="text-5xl">About page start from here</div>

            <button className="text-2xl bg-red-500 px-10 py-2"
                onClick={() => router.push("/")}
            >
                Go to Home Page
            </button>

            <button className="text-2xl bg-green-500 px-10 py-2"
                onClick={() => router.push("/about/aboutCollege")}
            >
                Go to About College Page
            </button>

            <button className="text-2xl bg-purple-500 px-10 py-2"
                onClick={() => router.push("/about/aboutSchool")}
            >
                Go to About School Page
            </button>



        </div>
    )
}

export default About