"use client"

import { useRouter } from "next/navigation"

export default function Lectures({ params }) {
    console.log(params)
    const router = useRouter()

    return (
        <div>
            <h1 className="text-4xl font-bold">Day of College:- {params.lectures[0]} </h1>
            <h2 className="text-4xl font-medium">Marks Obtained:- {params.lectures[1]} </h2>
            <h3 className="text-4xl font-extralight">Name:- {params.lectures[2]} </h3>

            <button className="hover:text-red-500 underline" onClick={() => router.back()}>Go to Back page</button>
        </div>
    )
}