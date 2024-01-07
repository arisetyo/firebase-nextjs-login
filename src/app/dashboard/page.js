'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useAuthContext } from '../../context/UserAuthenticate'

import styles from './page.module.css'


/**
 * Dashboard page
 * Can only be accessed after logged in
 * @returns 
 */
export default function Home() {
  const router = useRouter()

  const { logOut, user } = useAuthContext()

  // redirect to login page if not authenticated
  useEffect(() => {
    if (user === null) {
      router.push('/')
    }
  }, [])

  const logout = async () => {
    await logOut()
    router.push('/')
  }

  return (
    <main className={styles.main}>
      <p>
        Welcome <br />
        {user && user.email}
      </p>
      <button onClick={() => logout()}>Logout</button>
      <Link href={'/'}>Home</Link>
    </main>
  )
}
