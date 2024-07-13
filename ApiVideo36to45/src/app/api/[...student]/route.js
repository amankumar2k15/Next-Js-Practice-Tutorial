import { NextResponse } from "next/server"

// Video 44 - Catch all routes 

export async function GET(request, content) {
    const studentDetails = content.params.student
    // return new Response("All routes coming")
    return NextResponse.json({ result: studentDetails }, { status: 200 })
}

