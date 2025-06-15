import React from 'react'
import '@/styles/globals.css'


import { Metadata } from 'next'
import ThemeProvider from '@/components/providers/theme-provider'
import { Toaster } from 'sonner'



export const metadata: Metadata = {
  title: 'Nextron Boilerplate',
  description:
    'Nextron ( Next.Js + Electron ) project boilerplate in TypeScript, with TailwindCSS + Shadcn/ui, web and desktop crossbuild'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <Toaster
          richColors={true}
          visibleToasts={1}
          expand={false}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}

        </ThemeProvider>

      </body>
    </html>
  )
}
