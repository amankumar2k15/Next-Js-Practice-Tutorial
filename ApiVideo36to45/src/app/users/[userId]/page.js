"use client"
import { useRouter } from "next/navigation"

async function getUserById(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const data = await res.json()
    return data
}


export default async function Page({ params }) {
    const router = useRouter()

    // console.log("client component params==> ", params)
    const usersById = await getUserById(params.userId)
    // console.log("userBybID", usersById)
    const result = usersById.result

    return (
        < section className="ml-10 mt-20 flex flex-col gap-4">
            <div className="text-4xl font-bold">Selected id - User Data</div>
            <div className="text-xl font-medium ">Name : {result.name} </div>
            <div className="text-xl font-medium ">Age : {result.age} </div>
            <div className="text-xl font-medium ">Email : {result.email} </div>
            <button onClick={() => router.back()} className="rounded-lg px-4 py-2 w-[200px] bg-black text-white">Go to Back</button>
        </ section>
    )
}