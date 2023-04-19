import styles from '../styles/Home.module.css';
import Background from './background/Background';
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Work from './Work';
import Techno from './Techno';
import Contact from './Contact';
import Typed from 'react-typed';
import Presentation from './Presentation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Home() {

  let menuMobileStyle = {
    opacity: 0,
    position:"fixed",
    visibility: "hidden",
    transition: "all .3s",
    top: 0,
    left: 0,
    height: "100vh",
    width: 0,
    backgroundColor: "black",
  };

  const [afficherMenu, setAfficherMenu] = useState(false);

  let iconmenu = faBars;

  if (afficherMenu) {
    iconmenu = faXmark;
    menuMobileStyle = {
      zIndex: 10005,
      opacity: 1,
      visibility: "visible",
      transition: "all .3s",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "black",
    };
  }
  function masquerErreursEtAvertissements(message, source, ligne) {
  }
  console.error = masquerErreursEtAvertissements;
  console.warn = masquerErreursEtAvertissements;

  const [link, setLink] = useState(0.5)
  const [typed, setTyped]= useState(true)
  const [activeBackground, setActiveBackground]=useState(true)
  const backgroundT = useRef(null)
  const backgroundW = useRef(null)
  const backgroundC = useRef(null)
  const toolsRef = useRef(null);

  const ContactRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  const TL = gsap.timeline()

  useEffect(()=>{

    setTimeout(()=>{
      const scrollToOptions = {
        top: 0,
        behavior: "smooth"
      };
      window.scrollTo(scrollToOptions);
    },2000)

    const disableScroll = e => {
      e.preventDefault();
    }
    const disableKeyboardScroll = e => {
      const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
      if (keys[e.keyCode]) {
        e.preventDefault();
      }
    }
    document.addEventListener('wheel', disableScroll, { passive: false });
    document.addEventListener('keydown', disableKeyboardScroll, { passive: false });

    gsap.to('#startAnimation', 
    {y: '-100%', ease : 'Expo.easeIn',
      onStart:()=>console.log('start'),
      onComplete:()=>(
        document.removeEventListener('wheel', disableScroll),
        document.removeEventListener('keydown', disableKeyboardScroll),
        setTyped(false)
      )
    },5)

    TL.to(backgroundT.current,
      {
        duration:1,
        x: 100,
        autoAlpha:0,
        scrollTrigger:{
          trigger: backgroundT.current,
          start:'top 50%',
          end: 'center 70%',
          markers: false,
          scrub: true,
          onLeave:()=> {
            setLink(0)
            setTimeout(()=>{
              setLink(0.5)
            },1000)
          },
          onEnterBack:()=> {
            setLink(0)
            setTimeout(()=>{
              setLink(0.5)
            },1000)
        },
        }
    })
    TL.to(backgroundW.current,
      {
        duration:1,
        x: 100,
        autoAlpha:0,
        scrollTrigger:{
          trigger: backgroundW.current,
          start:'top 50%',
          end: 'center 70%',
          markers: false,
          scrub: true,
          onLeave:()=> {
            setLink(0)
            setTimeout(()=>{
              setLink(0.35)
            },1000)
          },
          onEnterBack:()=> {
            setLink(0)
            setTimeout(()=>{
              setLink(0.35)
            },1000)
        },
        }
    })
    TL.to(backgroundC.current,
      {
        duration:1,
        x: 100,
        autoAlpha:0,
        scrollTrigger:{
          trigger: backgroundC.current,
          start:'top 50%',
          end: 'center 70%',
          markers: false,
          scrub: true,
          onEnter:()=> {
            setLink(0)
            setTimeout(()=>{
              setLink(0.3)
            },1000)
          },
        }
    })
      const resize = async() => {
          if (window.innerWidth <= 500) {
            setActiveBackground(false)
          }
      };
      resize();
      window.addEventListener("resize", resize);
    
      return () => window.removeEventListener("resize", resize);
  },[])

  return (
    <>
    {/* {typed&&(
    <div id='startAnimation' className={styles.g}>
        <Typed
        className={styles.spantxt}
        strings={[
            'Welcome to my website',
            'have a good time',
          ]}
            typeSpeed={30}
            backSpeed={30}
            >
            <span></span>
        </Typed>
        </div>
          )} */}
      <div id='body' className={styles.body} >
        {activeBackground&&(
          <Background  links={link} />
        )}
        <Presentation myTools={toolsRef}/>
        <div ref={backgroundT}></div> 
        <Techno ref={toolsRef} /> 
        <div  id='myworks' ref={backgroundW}></div>
        <Work />
        
        <div ref={backgroundC}></div>
        <Contact ref={ContactRef} />
      </div>
      </>
  );
}
export default Home;
