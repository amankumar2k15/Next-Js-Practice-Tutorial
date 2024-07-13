import getUserData from "../../../../services/getUsers"

export default async function Page({ params }) {
    const getUserList = getUserData()
    const { users } = await getUserList
    // console.log("users", users)
    const currentId = params.userId     //to store the selected id
    // console.log("currentId", currentId)
    const userData = users[currentId - 1]
    console.log("userData", userData)

    return (
        <div>
            <h1 className="text-5xl font-thin">USER DETAIL PAGE</h1>
            <h2 className="text-xl font-bold">ID: {userData.id}</h2>
            <h3 className="text-xl ">Name : {userData.firstName} {userData.lastName}</h3>
            <h4 className="text-2xl font-medium">Website : {userData.university}</h4>
        </div>
    )
}

export async function generateStaticParams() {
    const getUserList = getUserData();
    const { users } = await getUserList

    return users.map((user) => ({
        userId: user.id.toString()
    }))
}