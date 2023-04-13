/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { useRef } from 'react';
import gsap from 'gsap'
import Typed from 'react-typed';
import { useRouter } from "next/router";
import styles from '../styles/Presentation.module.css'
import { useState } from 'react';


const Presentation = (props) => {
    function masquerErreursEtAvertissements(message, source, ligne) {
        // Ne rien faire pour les messages d'erreur ou d'avertissement
      }
      console.error = masquerErreursEtAvertissements;
      console.warn = masquerErreursEtAvertissements;
  const router = useRouter();
  const card = useRef(null);
  const card2 = useRef(null);
  const flecheDown = useRef(null);
  const [safar, setSafari] = useState(false);
  const [chrome, setChrome] = useState(false);

  const handleClick = () => {
    // if (props.myTools.current) {
    //   gsap.to(window, {
    //     scrollTo: {
    //       y: props.myTools.current.offsetTop || 0,
    //       autoKill: false
    //     },
    //     duration: 1
    //   });
    // } else {
    //   console.log('myTools.current is null or undefined');
    // }
  };

    const cardAnime=()=>{
      gsap.fromTo(card.current, {y:-10}, {y:10, repeat:-1, yoyo:'true', duration:3})
    }
    const cardAnime2=()=>{
      gsap.fromTo(card2.current, {y:-10}, {y:10, repeat:-1, yoyo:'true', duration:3})
    }
    const flecheDownAnime=()=>{
      gsap.fromTo(flecheDown.current, {y:10}, {y:-10, repeat:-1, yoyo:'true', duration:1})
    }
    useEffect(()=>{
      if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Chrome') !== -1) {
        // Pour Chrome
        console.log('chrome');
        setChrome(true)
      } else if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Safari') !== -1) {
        // Pour Safari
        console.log('safari');
        setSafari(true)
      }
      cardAnime()
      cardAnime2()
      flecheDownAnime()
    },[])
  
    return (
        <div className={styles.home}>
              <div className={styles.header}>
              </div> 
              <div className={styles.main}>
                <div ref={card2} className={styles.photoMe}><img src='n.png' style={{height:'100%', width:'100%'}} /></div>
                <div className={styles.boxReseaux}>
                    <img src='lin.png' style={{cursor:'pointer', height:'28px', width:'28px'}} onClick={()=>window.location.href = 'https://www.linkedin.com/in/ezechiel-felten-475693248/'}/>
                    <img src='git.png' style={{cursor:'pointer', height:'30px', width:'30px'}} onClick={()=>window.location.href = 'https://github.com/ezeflt'}/>
                    <img src='insta.png' style={{cursor:'pointer', height:'30px', width:'30px'}} onClick={()=>window.location.href = 'https://www.instagram.com/eze_flt/'}/>
                </div>
                <div className={styles.navBar}>
                  <div className={styles.line}></div>
                  <span onClick={()=>handleClick()} className={styles.btnNav}>My Tools</span>
                  <span className={styles.btnNav}>My projects</span>
                  <span className={styles.btnNav}>Contact me</span>
                </div>
                <div className={styles.textPresente}>
                <Typed
                className={styles.spantxt}
                strings={[
                    'Hello everyone',
                    'Are you a customer ?',
                    'Are you a recruiter ?',
                    'Are you a start up ?',
                    'no matter',
                    'You are',
                    'You are in the right place',
                  ]}
                    typeSpeed={30}
                    backSpeed={30}
                    backDelay={1000}
                    loop >
                    <span></span>
                </Typed>
                </div>
                <div ref={card} className={styles.boxEzechiel}>
                  <div className={styles.heightBox}>
                    <div className={styles.boxImg}>
                    < img src='BW1.png' className={styles.ih} />
                    </div>
                    <div className={styles.boxDescription}>
                    <span className={styles.txt} style={{ margin:'5px 0px',opacity:'0.7'}}>Felten Ezechiel</span>
                    <span className={styles.shadow} style={{color:'#fff', textAlign:'center', margin:'5px 0px', opacity:'0.7'}}>Frontend Developer</span>
                      <div className={styles.localE}>
                        <span className={styles.spanBottom}>Age:</span><span className={styles.spanBottom}>20 <span style={{fontSize:'13px'}}>years</span></span>
                      </div>
                      <div className={styles.localE}>
                        <span className={styles.spanBottom}>Country:</span><span className={styles.spanBottom}>Belgium</span>
                      </div>
                      <div className={styles.localE}>
                        <span className={styles.spanBottom}>languages:</span><span className={styles.spanBottom}>French</span>
                      </div>
                      <div className={styles.localE}>
                        <span className={styles.spanBottom}> </span><span style={{fontSize:'14px'}} className={styles.spanBottom}>English</span>
                      </div>
                      <div className={styles.EzeReseau}>
                        <img src='lin.png'style={{height:'20px'}} onClick={()=>window.location.href = 'https://www.linkedin.com/in/ezechiel-felten-475693248/'}/>
                        <img src='git.png'style={{height:'20px'}} onClick={()=>window.location.href = 'https://github.com/ezeflt'} />
                        <img src='twitter.png'style={{height:'15px'}} onClick={()=>window.location.href = 'https://twitter.com/toujours_plus_'} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.scrollDown}>
                    <img src='scroll.png' style={{height:'30px', visibility:'hidden'}} />
                    <img ref={flecheDown} src='flechScroll.png' style={{height:'20px', marginBottom:'20px'}} />
                </div>
              </div>
        </div>
    );
};

export default Presentation;