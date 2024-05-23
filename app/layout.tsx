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
        <div className='grid grid-cols-3 md:grid-cols-4 gap-4 container mx-auto'>
          <header className='md:col-span-4 col-span-3 bg-white'>
            <NavMenu></NavMenu>
          </header>
        {children}
          <footer className='row-start-5 md:col-span-4 col-span-3'>
            This is the footer.
          </footer>
        </div>
      </body>
    </html>
  )
}
