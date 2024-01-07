/**
 * Layout component that queries for data
 */

import { AuthContextProvider } from '../context/UserAuthenticate'
import { Inter } from 'next/font/google'

import './globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Firebase login with Next.js',
  description: 'Firebase login with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`
        ${styles.layout}
        ${inter.className}
      `}>
        <h1>Firebase login test</h1>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
