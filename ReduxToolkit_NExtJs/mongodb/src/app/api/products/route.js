import { MongoDB_URL } from "@/app/backend/connection/db";
import { Product } from "@/app/backend/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(MongoDB_URL)
        data = await Product.find({});
        // console.log("data", data)
    } catch (err) {
        console.log(err)
    }
    return NextResponse.json({ count: data.length, result: data, success: true })
}

export async function POST(req) {
    const payload = await req.json()
    try {
        await mongoose.connect(MongoDB_URL)
        const newProduct = new Product(payload)
        await newProduct.save()
        return NextResponse.json({ message: "Product created successfully", result: newProduct }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}
