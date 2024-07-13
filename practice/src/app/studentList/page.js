import Link from "next/link";

//Dynamic Routing hai ye -  12th video

export default function StudentList() {

    const studentListItems = [
        { href: "/studentList/anil", name: "Anil" },
        { href: "/studentList/sam", name: "Sam" },
        { href: "/studentList/rohit", name: "Rohit" },
        { href: "/studentList/arnav", name: "Arnav" },
        { href: "/studentList/suresh", name: "Suresh" },
        { href: "/studentList/manoj", name: "Manoj" },
    ]

    return (
        <div>
            <h1 className="text-5xl">List of the student is here</h1>
            <div>
                <ul className="flex flex-col gap-4 text-2xl mt-10 px-2 ">
                    {studentListItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.href} className="hover:text-red-600 underline">{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <Link href="/">Go to Home Page</Link>
                </div>
            </div>
        </div>

    )
}