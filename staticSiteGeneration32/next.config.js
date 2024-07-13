/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/admin",
                destination: "/",
                permanent: false
            },
            {
                source: "/worker/:workerId",        //This is how i can access the /worker  but not any specific id of worker i.e. worker/:workerId
                destination: "/",
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig
