// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Button } from "@/components/ui/button"
// import { useRouter } from 'next/navigation'
// import EditSVG from '@/public/edit.svg'
// function Page() {
//   const route = useRouter();
//   const backgroundImage = "/back.png"; 
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-4" 
//     style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         minHeight: '100vh', 
//         width: '100%', 
//       }}>
//       <Image
//         priority
//         src="/images/logo.png"
//         alt="logo"
//         width={150}
//         height={150}
//         className='animate-bounce'
//       />
//       <h1 className="text-lg font-semibold ">
//         🚀 Nextron – Build Cross-Platform Apps with Next.js + Electron
//       </h1>
//       <p>Built with TypeScript, TailwindCSS, and Shadcn/UI</p>
//       <p>Deploy to Web and Desktop from a single codebase.</p>
//       <Button onClick={() => route.push('/home')}>Click me</Button>

//       <div className="flex items-center rounded-lg border px-7 py-[14px]">
//         <Image src={EditSVG} alt="edit icon" width={24} height={24} />
//         <span className="typing-animation  ">
//           Get started by editing renderer/app/page.tsx
//         </span>
//       </div>
//     </main>
//   )
// }

// export default Page

import { CenterContent } from '@/components/layout/home-layout/center'
import React from 'react'

export default function Page() {
  return <CenterContent />
}
