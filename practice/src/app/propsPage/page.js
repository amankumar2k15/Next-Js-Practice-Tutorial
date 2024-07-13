"use client"
import { useRouter } from "next/navigation"

//make a component to pass the props
const PropsComponent = (props) => {
    return (
        <div>
            <h1 className="bg-red-400 px-10 py-4 rounded-lg cursor-pointer hover:bg-red-600">My name is {props.text}</h1>
        </div>
    )
}

const PropsPage = () => {
    const router = useRouter()

    return (
        < div className="flex justify-center items-center text-3xl flex-col h-screen gap-4">
            <PropsComponent text="Aman" />
            <PropsComponent text="Shivam" />
            <PropsComponent text="Rahul" />
            <PropsComponent text="Sanvi" />
            <button className="bg-black text-white rounded-xl py-4 px-10"
                onClick={() => router.push("/about")}
            >
                Go to About Page
            </button>
        </ div>
    )
}

export default PropsPage


