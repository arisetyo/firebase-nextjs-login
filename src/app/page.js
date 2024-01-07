'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useAuthContext } from '../context/UserAuthenticate'

import styles from './page.module.css'


/**
 * Home page
 * @returns 
 */
export default function Home() {
  const router = useRouter()
  
  const { user, googleSignIn } = useAuthContext()

  // redirect to dashboard page if authenticated using Google
  const handleGoogleSignIn = async e => {
    e.preventDefault();
    try {
      await googleSignIn()
      // navigate("/home")
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main className={styles.main}>
      {
        user === null ? (
          <button onClick={handleGoogleSignIn}>Login using Google</button>
        ) : ''
      }
      
      <Link href={'/dashboard'}>Dashboard</Link>
    </main>
  )
}
