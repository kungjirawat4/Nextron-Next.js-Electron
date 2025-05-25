'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const route = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">

      <div className='flex justify-center'>
        <Image
          src='/anime.png'
          className="my-[50px] animate-bounce rounded-full shadow-lg"
          alt="menhera"
          width={300}
          height={300}
        />
      
      </div>
      <div className='flex justify-center'>
      <Button variant='outline' onClick={() => route.push('/')}>Back</Button>
      </div>
        
    </main>
  )
}
