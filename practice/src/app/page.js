"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page)
  }

  const moveToPropsPage = () => {
    router.push("/propsPage")
  }

  return (
    <div className='bg-white py-8 text-black flex justify-center items-center flex-col gap-4'>
      <h1 className='text-3xl'>Basic Routing || Making New Page</h1>

      <Link className='bg-red-500 px-10 py-4 rounded-lg' href="/login">Go to Login Page</Link>

      <Link className='bg-green-500 px-10 py-4 rounded-lg' href="/about">Go to About Page</Link>

      <Link className='bg-blue-500 px-10 py-4 rounded-lg' href="/studentList">Go to Student List Page</Link>

      <Link className='bg-yellow-500 px-10 py-4 rounded-lg' href="/study">Go to Study Page</Link>

      <Link className='bg-gray-950 text-white px-10 py-4 rounded-lg' href="/FetchApiClientSide">Go to Fetch API Client Page</Link>

      <Link className='bg-slate-900 text-white px-10 py-4 rounded-lg' href="/fetchApiServerSide">Go to Fetch API Server Page</Link>

      <Link className='bg-red-900 text-white px-10 py-4 rounded-lg' href="/cssTesting">Module.css Testing</Link>

      <Link className='bg-green-900 text-white px-10 py-4 rounded-lg' href="/imageBox">Image</Link>

      <Link className='bg-blue-900 text-white px-10 py-4 rounded-lg' href="/fontBox">Font</Link>

      <Link className='bg-yellow-900 text-white px-10 py-4 rounded-lg' href="/genMetaData">Generated Meta Data</Link>

      <Link className='bg-gray-600 text-white px-10 py-4 rounded-lg' href="/location">Get Location page</Link>
      <div>

        {/* //For navigate  */}
        <button onClick={() => router.push("/login")} className='text-purple-400 font-extrabold px-10 py-4'>Go to Login Page</button>
        <button onClick={() => navigate("/about")} className='text-gray-950 font-extrabold px-10 py-4'>Go to About Page</button>

        <button onClick={moveToPropsPage} className='text-gray-950 font-extrabold px-10 py-4'>Go to Props Page</button>
        {/* //For navigate  */}

      </div>

    </ div >
  )
}
