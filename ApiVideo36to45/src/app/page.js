"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()

  return (
    <>
      <section className='flex justify-center items-center flex-col gap-4 w-full h-screen'>
        <div className='text-4xl'>This is my API Playlist</div>
        <button onClick={() => router.push("/users")} className='px-6 py-2 bg-blue-500 rounded-lg'>Users</button>
        <button onClick={() => router.push("/addUser")} className='px-6 py-2 bg-red-500 rounded-lg'>Add User</button>
      </section>
    </>
  )
}

export default page