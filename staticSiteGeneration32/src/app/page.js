import Image from 'next/image'
import Link from 'next/link'
import { API_BASE_URL } from './config/constants'

export default function Home() {

  console.log(process.env.SERVER_PASSWORD)

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">

      {/* Environment Variables - video 34  */}
      {
        process.env.NODE_ENV === "development" ?
          <h1 className='text-xl font-bold'>You are in the development mode</h1>
          :
          <h1 className='text-xl font-bold'>You are in the production mode</h1>
      }

      {API_BASE_URL}
      {/* Environment Variables - video 34  */}

      <div className='font-bold text-3xl'>This is home page</div>
      <Link className='bg-red-500 px-4 py-2 rounded-lg' href="/users">Users</Link>
      <Link className='bg-blue-500 px-4 py-2 rounded-lg' href="/admin">Admin</Link>
      <Link className='bg-green-500 px-4 py-2 rounded-lg' href="/worker">Worker</Link>
    </main>
  )
}
