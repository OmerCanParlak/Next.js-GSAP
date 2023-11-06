import styles from './style.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const phrapses = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function index() {

   

   
  return (
    <div className={styles.description}>
        {
            phrapses.map((phrapse , index) => {
                return <AnimatedText key={index}>{phrapse}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(text.current,{
                left:"0",
                opacity:1,
                scrollTrigger:{
                    trigger:text.current,
                    start:"top bottom",
                    end:"bottom+=400px bottom",
                    scrub:true,
                    markers:true 
                },
               
            })
        },text)
      
        return () => ctx.revert()

    }, [])
    return (
      <p ref={text} >{children}</p>
    )
}