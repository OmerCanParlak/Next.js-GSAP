import Image from 'next/image'
import { useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  return (
    useEffect( () => {
        async  () =>  {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
        }
    }, [])
    <main className={styles.main}>
      
    </main>
  )
}
