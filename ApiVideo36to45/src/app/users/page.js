import DeleteUser from "@/component/DeleteUser"
import Link from "next/link"

async function getUsers() {
    let res = await fetch("http://localhost:3000/api/users")
    let data = await res.json()
    return data
}

// client component me - async await kaam ni krega direct 
// server component me - async await kaam krega direct  and button ke upr onClick chalounga to server component me button work nhi krega 

export default async function Page() {
    const users = await getUsers()

    return (
        <>
            <div className="text-4xl font-bold">User List</div>
            {
                users && users.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-row gap-x-10">
                            <div className="text-2xl font-semibold underline hover:text-blue-800">
                                <Link href={`users/${item.id}`}>{item.name}</Link>
                            </div>
                            <div className="px-1 py-1 bg-black text-xl font-semibold hover:bg-black/90 text-white">
                                <Link href={`users/${item.id}/updateUser`}>Edit</Link>
                            </div>

                            <div className="px-1 py-1 bg-black text-xl font-semibold hover:bg-black/90 text-white">
                                {/* <Link href={`users/${item.id}/updateUser`}>Delete</Link> */}
                                <DeleteUser id={item.id} />
                            </div>
                        </div>
                    )
                })
            }

            <button className="text-lg font-bold">
                <Link className="px-4 py-2 bg-red-200 mt-4" href="/" >Go Home</Link>
            </button>
        </>
    )
} 