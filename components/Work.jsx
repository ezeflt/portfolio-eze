import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/router';
import { Route } from 'react-router-dom';
import styles from '../styles/Work.module.css'
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Opacity } from 'tsparticles-engine';

const WorkPage = () => {

  const CarouselRef = useRef(null)
  const [page, setPage]= useState(true)
  const [ref, setRef]= useState(Number)

  // css update useState
  const [marginL, setMarginL]= useState('12px')
  const [marginB, setMarginB]= useState('0px')
  const [heightImg, setHeightImg]= useState('20px')
  const [SizeSeemore, SetSizeSeemore]= useState('0.6em')
  const [widthDot, setWidthDots]= useState('48px')
  const [heightDot, setHeightDots]= useState('8px')
  const [animationBar, setAnimationBar]= useState(true)

  const [active, setActive]=useState(false)
    function masquerErreursEtAvertissements(message, source, ligne) {
        // Ne rien faire pour les messages d'erreur ou d'avertissement
      }
      console.error = masquerErreursEtAvertissements;
      console.warn = masquerErreursEtAvertissements;

  // const route = useRouter();
  const LineEnter = (i) => {
      gsap.to(`#bar-${i}`, {width:'22%', duration:0.1})
  }
  
  const LineLeave = (i) => {
      gsap.to(`#bar-${i}`, {width:'10%', duration:0.1})
  }

  useEffect(() => {
    const resize = async() => {
      setTimeout(()=>{
        if (window.innerWidth <= 335) {
          setWidthDots('20px')
          setMarginB('90px');
          setHeightDots('6px');
          setHeightImg('34px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 376) {
          setWidthDots('20px')
          setMarginB('70px');
          setHeightDots('6px');
          setHeightImg('34px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 400 && window.innerHeight <= 700 ) {
          setWidthDots('28px')
          setMarginB('55px');
          setHeightDots('6px');
          setMarginL('0px');
          setHeightImg('34px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 400 && window.innerHeight <= 850 ) {
          setWidthDots('28px')
          setMarginB('55px');
          setHeightDots('6px');
          setMarginL('0px');
          setHeightImg('34px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 430) {
          setWidthDots('28px')
          setMarginB('35px');
          setHeightDots('6px');
          setHeightImg('32px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 500) {
          setWidthDots('32px')
          setMarginB('35px');
          setHeightDots('6px')
          setHeightImg('29px');
          SetSizeSeemore('0.9em');
          return
        }
        if (window.innerWidth <= 530) {
          setWidthDots('32px');
          return
        }
        if (window.innerWidth <= 640) {
          setWidthDots('42px')
          return
        }
        if (window.innerWidth <= 690) {
          setWidthDots('38px')
          setMarginL('0px');
          return
        }
        if (window.innerWidth <= 850) {
          setMarginL('8px');
          setMarginB('-6px');
          setHeightImg('27px');
          SetSizeSeemore('0.8em');
          setAnimationBar(false)
          return
        }
        if (window.innerWidth < 1050) {
          setMarginL('25px');
          setMarginB('40px');
          return
        }
        if (window.innerWidth < 1250) {
          setMarginL('20px');
          setMarginB('30px');
          return
        }
      },4000)
    };
    resize();
    window.addEventListener("resize", resize);
  
    return () => window.removeEventListener("resize", resize);
  }, []);

  const CustomCarousel = styled(Carousel)`

  .carousel .control-dots .dot {
    width: ${widthDot};
    height: ${heightDot};
    cursor: pointer;
    border-radius: 0px;
    margin 0px 12px;
}
  .carousel .control-dots {
    margin-left: ${marginL};
    margin-bottom : ${marginB};
}
.control-arrow {
    top: 0;
    color: #fff;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px;
    visibility: hidden;
}
.carousel-status {
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgb(0 0 0 / 90%);
    color: #fff;
}
.boxWork{
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justofy-content: space-between;
}
`;

  const img = [
      {img:'ordinateur1', title:'Easy Lease',vercel:'https://vercel/easyLease.com' ,git:'https://vercel/easyLease.com' ,desc:`Easy lease est une application qui permet de faire l'impossible rendez vous sur nôtre applications web pour en savoir plus et merci d'avance de consulter`},
      {img:'ordinateur2', title:'Easy Lease',vercel:'https://vercel/easyLease.com' ,git:'https://vercel/easyLease.com' ,desc:`Easy lease est une application qui permet de faire l'impossible rendez vous sur nôtre applications web pour en savoir plus et merci d'avance de consulter`},
    ]
    // console.log('caroussel',CarouselRef);
    // const indexCarousselle = CarouselRef.current.state.selectedItem;
      // setRef()
    // )

    const dataCarousel = [
      {number:'Number1.svg', s1:'Next', s2:'React', s3:'Node', s4:'Express', s5:'Mongo', s6:'Chart', typeAppli:'Commerce Applications', title1:'Easy', title2:'Lease', },
      {number:'Number1.svg', s1:'Next', s2:'React', s3:'Node', s4:'Express', s5:'Mongo', s6:'Chart', typeAppli:'Commerce Applications', title1:'Easy', title2:'Lease', },
    ]

    const mapCarousel = dataCarousel.map((data, i)=>{
      return (
        <div className={styles.cardWork}>
                <div className={styles.NumberBox}>
                <img src={data.number} style={{height:'100%', widht:'auto', zIndex:'10',backdropFilter: 'blur(10px)'}} />
                </div>
                  <div className={styles.card}>
                      
                  </div>
              </div>
      )
    })
    const projectsData = [
      {
        title: 'Twitter clone', infoWebsite:'Twitter website' ,img:'t.png', linkWeb: '', linkGitHub:'', color:'#2b5687', background: true,
        Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'}
      },
      {
        title: 'Ok Voiture', infoWebsite:'Car location website' ,img:'okVoiture.png', linkWeb: '', linkGitHub:'', color:'#f5547e', background: true,
        Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'}
      },
      {
        title: 'easy lease', infoWebsite:'B2B commerce Website' ,img:'easy.png', linkWeb: '', linkGitHub:'', color:'#A066CB', background: true,
        Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'}
      },
      {
        title: 'locapic map', infoWebsite:'' ,img:'locapic.png', linkWeb: '', linkGitHub:'', color:'#ED7B62', background: false,
        Techno:{t1:'React-Native ', t2:'Expo Js', t3:'Node Js', t4:'Express Js', t5:'Mongo DB'}
      },
      {
        title: 'Selfie Native App', infoWebsite:'Native Applications Selfie' ,img:'selfieB.png', linkWeb: '', linkGitHub:'', color:'#75d7ff', background: true,
        Techno:{t1:'React-Native ', t2:'Expo Js', t3:'Node Js', t4:'Express Js', t5:'Mongo DB'}
      }
    ]
    const [imagesLoaded, setImagesLoaded] = useState(true);

    const projects = projectsData.map((data, i)=>{
      return (
        <div key={i} className={styles.cardWork}>
                  <div id='card' className={styles.card}>
                      <div className={styles.tools}>
                        <span className={styles.spanTools}>{data.Techno.t1}</span>
                        <span className={styles.spanTools}>{data.Techno.t2}</span>
                        <span className={styles.spanTools}>{data.Techno.t3}</span>
                        <span className={styles.spanTools}>{data.Techno.t4}</span>
                        <span className={styles.spanTools}>{data.Techno.t5}</span>
                      </div>
                      <div className={styles.boxImg}>
                        <img src={data.img} className={styles.img} onLoad={()=>setImagesLoaded(true)} />
                        <span className={styles.span}>{data.infoWebsite}</span>
                      </div>
                      <div className={styles.info}>
                        <div className={styles.boxTitle}>
                          <span className={styles.title}>
                            {data.title}
                          </span>
                        </div>
                        <div className={styles.boxVisit}>
                          <span 
                            onMouseLeave={()=>animationBar?LineLeave(i): false}
                            onMouseEnter={()=>animationBar?LineEnter(i): false} 
                            style={{color:`${data.color}`}}
                            className={styles.spanVisit}>
                              Visite the website
                            </span>
                          <div id={`bar-${i}`} className={styles.bar}></div>
                          <span className={styles.spanVisit} style={{fontSize:`${SizeSeemore}`}}>see more</span>
                        </div>
                        <div className={styles.boxGitHub}>
                          <a style={{cursor:'pointer', height:`${heightImg}`,marginRight:'5px'}}>
                            <img src='figma.png' style={{height:'100%', width:'auto'}} />
                          </a>
                          <a style={{cursor:'pointer', height:`${heightImg}`, margin:'0px 5px'}}>
                            <img src='git.png' style={{height:'100%', width:'auto'}} />
                          </a>
                        </div>
                      </div>
                  </div>
              </div>
      )
    })

    return (
      <div className={styles.WorkPage}>
        <div className={styles.NumberBox}>
          <span className={styles.titleWork}>WORK</span>
        </div>
        {imagesLoaded&&(
          <CustomCarousel
          swipeable
          ref={CarouselRef}
          infiniteLoop={true}
          className={styles.boxWork}
          >
              {projects}
          </CustomCarousel>
        )}      
      </div>
    );
};

export default WorkPage;