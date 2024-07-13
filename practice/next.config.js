/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"]     //This lines is used to show images that is copied with whole URL
    },
    output: "export"                       //This line is used to generate Static HTML so that i can easily export my HTML to deploy the code if i have 5-6 pages static website.
}

module.exports = nextConfig


