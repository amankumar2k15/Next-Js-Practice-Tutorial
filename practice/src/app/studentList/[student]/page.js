"use client"
import { useRouter } from "next/navigation"


export default function StudentDetails({ params }) {
    console.log(params)
    const router = useRouter()
    return (
        <div >
            <h1 className="text-5xl font-bold text-black">Student Details Page </h1>
            <h2 className="capitalize">Student name is :- {params.student}</h2>

            <button className="hover:text-red-500 underline"
                onClick={() => router.back()}
            >
                Go to back Page
            </button>
        </div>
    )
}