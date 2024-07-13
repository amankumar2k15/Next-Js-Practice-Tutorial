// video - 36 & 37

import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    try {
        const userId = +content.params.id;
        const userData = user.find((item) => item.id === userId);
        if (!userData) {
            return NextResponse.json({ result: "No Data Found", success: false }, { status: 404 });
        }

        return NextResponse.json({ result: userData, success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ result: "Internal Server Error", success: false }, { status: 500 });
    }
}

export async function PATCH(req, content) {
    const payload = await req.json()
    // console.log("pyakiadd", payload)                  //Frontend se aara hai ye - Payload me data aata hai fields wala
    // console.log("content", content.params)            //Frontend se arra hai - Content me Id get kr skte hai specific user ki

    try {
        if (!payload.name || !payload.email || !payload.age) {
            return NextResponse.json({ message: "Requested data is not valid", success: false }, { status: 404 })
        }
        return NextResponse.json({ message: "Data updated successfully", result: payload, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 })
    }
}

export async function DELETE(req, content) {
    console.log("hitting this API")
    const id = content.params.id
    try {
        if (!id) {
            return NextResponse.json({ message: "User not found", success: false }, { status: 404 })
        }
        return NextResponse.json({ message: "User Deleted Successfully", success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 })
    }

}