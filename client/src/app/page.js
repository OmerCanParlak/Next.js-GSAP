'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Intro from '../components/intro';
import Description from "../components/descriptions"
import Projects from "../components/projects"


export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={styles.main}>
        <Intro />
        <Description/>
        <Projects/>
       
      </main>
  )
}