import {useRef, useEffect, useState} from 'react';
import styles from '../styles/Contact.module.css'
import gsap from 'gsap'

const Contact = () => {


  function masquerErreursEtAvertissements(message, source, ligne) {
    // Ne rien faire pour les messages d'erreur ou d'avertissement
  }
  console.error = masquerErreursEtAvertissements;
  console.warn = masquerErreursEtAvertissements;
    const markerRef = useRef(null);
    const [imgLinkedin, setImgLinkedin] = useState('25px')
    const [imgGitHub, setImgGitHub] = useState('30px')

    const markAnime =()=>{
        gsap.fromTo(markerRef.current,{y:0}, {y:-50, yoyo:true, repeat:-1, duration:0.8})
      }
      useEffect(()=>{
        markAnime()

        const resize = () => {
          if(window.innerWidth <=1175){
            setImgGitHub('26px');
            setImgLinkedin('20px')
          }
          if(window.innerWidth <=1100){
            setImgGitHub('26px');
            setImgLinkedin('20px')
          }
          if(window.innerWidth <=950){
            setImgGitHub('22px');
            setImgLinkedin('17px')
          }
          if(window.innerWidth <=765){
            setImgGitHub('22px');
            setImgLinkedin('17px')
          }
      };
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    },[])

    return (
        <div className={styles.main4}>
                <div className={styles.header4}>
                    <h1 className={styles.headContact}>CONTACT ME</h1>
                </div>
                <div className={styles.body4}>
                <div className={styles.message}>
                    <span className={styles.endMessage}>You have reached the end of my description</span>
                    <div className={styles.contactNumber}>
                        <span className={styles.msgPhone}>.contact me by phone</span>
                        <span className={styles.msgNumber}>07 49 96 40 39</span>
                    </div>
                    <span className={styles.send} onClick={() => window.location = 'mailto:feltenezechiel1@gmail.com'}>.send me an email</span>
                </div>
                <div className={styles.local}>
                  <span className={styles.spanBottomA}>Country:</span><span className={styles.spanBottomA}>Belgium</span>
                </div>
                
                <div className={styles.local} style={{marginTop:'480px'}}>
                <div className={styles.boxMap}>
                          <img src='marker.png' className={styles.marker} ref={markerRef} />
                          <img src='map.png' className={styles.map} />
                          <img src='liege.png' style={{opacity:'1'}} className={styles.map} />
                        </div>
                  <span className={styles.spanBottomA}>City:</span><span className={styles.spanBottomA}>Liège</span>
                </div>
              </div>
              <div className={styles.bottom4}>
                <div className={styles.reseauxBox}>
                  <div className={styles.boxR}>
                    <img src='git.png' style={{width:'auto', height:`${imgGitHub}`}} /> 
                    <span className={styles.spanBottomG}>
                        Git hub
                      </span>
                  </div>
                  <div className={styles.boxR}>
                    <img src='lin.png' style={{width:'auto', height:`${imgLinkedin}`}} /> 
                    <span className={styles.spanBottomG}>
                        Linkedin
                      </span>
                  </div>
                </div>
                <span className={styles.spanBottomB}>My portfolio 20/01/2023 ©</span>
                <span className={styles.spanBottomC}>feltenezechiel1@gmail.com</span>
              </div>
            </div>
    );
};

export default Contact;