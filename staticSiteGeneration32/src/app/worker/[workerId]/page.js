import getUserData from "../../../../services/getUsers"

export default async function Page({ params }) {
    console.log(params)
    const getUserList = getUserData()
    const { users } = await getUserList
    const currentId = params.workerId     //to store the selected id
    const userData = users[currentId - 1]

    return (
        <div>
            <h1 className="text-5xl font-thin">WORKER DETAIL PAGE</h1>
            <h2 className="text-xl font-bold">ID: {userData.id}</h2>
            <h3 className="text-xl ">Name : {userData.firstName}</h3>
            <h4 className="text-2xl font-medium">Website : {userData.university}</h4>
        </div>
    )
}

export async function generateStaticParams() {
    const getUserList = getUserData();
    const { users } = await getUserList

    return users.map((user) => ({
        workerId: user.id.toString()
    }))
}