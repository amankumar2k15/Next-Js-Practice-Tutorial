import Link from "next/link"
import getUserData from "../../../services/getUsers"


export default async function Page() {
    const getUserList = getUserData()
    const { users } = await getUserList

    return (
        <div>
            <h1 className="text-5xl font-bold">Users List</h1>
            <div>
                {users.map((item) => {
                    return (
                        <div key={item.id} className="text-2xl font-semibold underline hover:text-blue-800">
                            <Link href={`users/${item.id}`}>{item.firstName}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}