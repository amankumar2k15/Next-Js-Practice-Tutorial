import Image from "next/image"
import Profile from "../../../public/vercel.svg"

export default function ImageBox() {
    // Image Optimization - 24th video 

    return (
        <main>
            <h1>Image Optimization in React</h1>
            <div className="px-10">
                <Image src={Profile} alt="profileImg" />
            </div>
            <div className="px-10">
                <img src={Profile.src} alt="profileImg" width={600} />
            </div>
            <div className="mt-4">
                <Image
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="browserImg" width={200} height={200} />
            </div>
        </main>
    )
}