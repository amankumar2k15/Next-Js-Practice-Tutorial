import { Roboto } from "next/font/google"

const roboto1 = Roboto({
    weight: "900",
    subsets: ["latin"],
    display: "swap"
})
const roboto2 = Roboto({
    weight: "100",
    subsets: ["cyrillic"],
    display: "block"
})

export default function FontBox() {

    return (
        <>
            <div>This div is written by normal class</div>
            <p className={roboto1.className}>This para is written by roboto class</p>
            <p className={roboto2.className}>This para is written by roboto class</p>
        </>
    )
}