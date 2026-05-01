"use client"
import React from 'react'
import { useParams , useRouter } from 'next/navigation'

const Page = () => {
const params = useParams()
const router = useRouter()
  return (
    <div>
      {params.slug}

      <button className='bg-gray-800 font-bold px-4 py-2' onClick={() => router.push("/about")}>About us</button>
    </div>
  )
}

export default Page

