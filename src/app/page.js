'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useAuthContext } from '../context/UserAuthenticate'

import styles from './page.module.css'
import Image from 'next/image'


/**
 * Home page
 * @returns 
 */
export default function Home() {
  const router = useRouter()

  const searchParams = useSearchParams()
  
  const { user, googleSignIn } = useAuthContext()

  useEffect(() => {
    // show alert if logout success
    if (searchParams.get('logout') === "success") {
      alert('Logout success')
    }
  }, [])

  // redirect to dashboard page if authenticated using Google
  const handleGoogleSignIn = async e => {
    e.preventDefault();
    try {
      await googleSignIn()
      router.push('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <main className={styles.main}>
      {
        user === null ? (
          <button
            onClick={handleGoogleSignIn}
          >
            Login using Google
            <Image
              alt='g logo'
              src={'/g.svg'}
              width={20}
              height={20}
            />
          </button>
        ) : ''
      }
      
      <Link href={'/dashboard'}>Dashboard</Link>
    </main>
  )
}
