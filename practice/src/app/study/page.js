import Link from "next/link";

//Catch All Segments    - 13th video

export default function Study() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center w-full"> All Lectures of Colleges</h1>

            <ul className="flex flex-col gap-1 text-2xl">
                <Link className="underline hover:text-red-600" href="/study/1">1</Link>
                <Link className="underline hover:text-red-600" href="/study/2">2</Link>
                <Link className="underline hover:text-red-600" href="/study/3">3</Link>
                <Link className="underline hover:text-red-600" href="/study/4">4</Link>
                <Link className="underline hover:text-red-600" href="/study/1/200">200</Link>
                <Link className="underline hover:text-red-600" href="/study/1/400">400</Link>
                <Link className="underline hover:text-red-600" href="/study/1/600">600</Link>
                <Link className="underline hover:text-red-600" href="/study/1/800">800</Link>
                <Link className="underline hover:text-red-600" href="/study/1/200/sam">sam</Link>
                <Link className="underline hover:text-red-600" href="/study/1/400/rama">rama</Link>
                <Link className="underline hover:text-red-600" href="/study/1/600/krishna">krishna</Link>
                <Link className="underline hover:text-red-600" href="/study/1/800/vikas">vikas</Link>
            </ul>
            <Link href="/">Go to home page</Link>
        </div>
    )
}