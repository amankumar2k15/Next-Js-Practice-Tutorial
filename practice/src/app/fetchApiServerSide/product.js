"use client"

export default function Product({ price }) {
    return (
        <button
            onClick={() => alert(price)}
            className="bg-slate-600 px-6 py-2"
        >
            Click me
        </button>
    )
}

