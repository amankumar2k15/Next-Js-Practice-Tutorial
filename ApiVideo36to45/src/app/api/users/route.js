// video - 36 & 37
import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

//GET Api of backend
export function GET() {
    const data = user
    // console.log("data====>", data)
    return NextResponse.json(data, { success: 200 })
}


//POST Api of backend
export async function POST(req) {
    const payload = await req.json()         //Frontend se aara hai ye
    console.log("payload", payload)

    if (!payload.name || !payload.email || !payload.age) {
        return NextResponse.json({ message: "Please fill the required fields", success: false }, { status: 404 })
    }
    return NextResponse.json({ message: "Data Created Successfully", success: true, result: payload }, { status: 200 }
    )

}




// export function GET(request) {
//     return NextResponse.json(
//         { name: "Aman", college: "Chandigarh University", age: 24 }, { status: 200 }
//     )
// }