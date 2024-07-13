"use client"
import Script from "next/script";

export default function Location() {
    return (
        <>
            <Script
                src="../../location.js"
                onLoad={() => {
                    console.log("File loaded")
                }}
            />
            <div className="font-bold text-4xl">Generate Location from here</div>
        </>
    )
}