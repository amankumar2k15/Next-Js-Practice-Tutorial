import { MongoDB_URL } from "@/app/backend/connection/db"
import { Product } from "@/app/backend/model/product"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PATCH(request, content) {
    const productID = content.params.productId        // it is basically req.params.id
    const payload = await request.json()             //This comes from frontend part
    console.log(payload, " payload")

    try {
        await mongoose.connect(MongoDB_URL)
        const updatedProduct = await Product.findByIdAndUpdate({ _id: productID }, payload, { new: true })
        return NextResponse.json({ message: "Product update successfully", result: updatedProduct, success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "External Server Error", success: false }, { status: 500 })
    }
}

//Getting id by Product
export async function GET(request, content) {
    const productId = content.params.productId

    try {
        await mongoose.connect(MongoDB_URL)
        const getProduct = await Product.findById({ _id: productId })
        await getProduct.save()
        return NextResponse.json({ message: "Product fetched successfully", result: getProduct, success: true }, { status: 200 })

    } catch (err) {
        return NextResponse.json({ message: "External Server Error", success: false }, { status: 500 })
    }
}

//Delete API
export async function DELETE(request, content) {
    const productID = content.params.productId

    try {
        await mongoose.connect(MongoDB_URL)
        await Product.deleteOne({ _id: productID })
        return NextResponse.json({ message: "Product deleted successfully", success: true }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "External Server Error", success: false }, { status: 500 })
    }
}