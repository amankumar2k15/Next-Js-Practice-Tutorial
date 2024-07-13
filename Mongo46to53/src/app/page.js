

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className='text-3xl'>Connecting MongoDB to DATABASE</div>
      <Link href="/addProduct" className="bg-blue-600 px-4 py-2 mt-10">Add Product</Link>
      <Link href="/product" className="bg-red-600 px-4 py-2 mt-5">Product List</Link>
    </main>
  )
}
