import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavMenu from "./ui/navmenu"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sample Blog',
  description: 'A sample blog to show how to post.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto'>
          <header className='md:col-span-3 col-span-2 bg-white'>
            <NavMenu></NavMenu>
          </header>
        {children}
          <footer className='row-start-3 md:col-span-3 col-span-2'>
            This is the footer.
          </footer>
        </div>
      </body>
    </html>
  )
}
