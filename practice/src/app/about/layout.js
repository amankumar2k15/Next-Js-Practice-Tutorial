"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

//This is my CommanLayout Example - 10th video
// This is my Conditional Layout Example by using usePathname  which is similar to useLocation.pathname  -- 11th video
export default function AboutLayout({ children }) {
    const router = useRouter()
    const pathname = usePathname();

    return (
        <>
            {
                pathname !== "/about/aboutSchool" ?
                    (
                        <div className="bg-black text-white flex flex-row justify-between px-10 py-4">
                            <Link href="/">About Navbar</Link>
                            <div>
                                <ul className="flex gap-10 ">
                                    <Link href="/about" className="hover:text-red-400 bg-white text-black px-4">
                                        Go to About Main
                                    </Link>
                                    <Link href="/about/aboutCollege" className="hover:text-red-400 bg-white text-black px-4">
                                        Go to About College
                                    </Link>
                                    <Link href="/about/aboutSchool" className="hover:text-red-400 bg-white text-black px-4">
                                        Go to About School
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    )
                    :
                    (
                        <>
                            <div>
                                <Link href="/" className="font-bold underline text-4xl">Go to Home Page</Link>
                            </div>
                            <div>
                                {/* with the help of router.back()  i can easily go back to the page from where i came  */}
                                <button onClick={() => router.back()} > Go To Back Page</button>
                                {/* with the help of router.back()  i can easily go back to the page from where i came  */}
                            </div>
                        </>
                    )
            }

            {children}
        </>
    )

}