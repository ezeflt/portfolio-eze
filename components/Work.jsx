import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Work.module.css';
import styled from 'styled-components';
import gsap from 'gsap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const WorkPage = () => {
  
  const CarouselRef = useRef(null)
  // css update useState
  const [marginL, setMarginL]= useState('12px');
  const [marginB, setMarginB]= useState('0px');
  const [heightImg, setHeightImg]= useState('20px');
  const [SizeSeemore, SetSizeSeemore]= useState('0.6em');
  const [widthDot, setWidthDots]= useState('48px');
  const [heightDot, setHeightDots]= useState('8px');
  const [techno, setTechno]= useState();
  const [color, setColor]= useState('');
  const [animationBar, setAnimationBar]= useState(true);
  const [phoneTrue, setPhoneTrue]= useState(false);
  const [modal, setModal]= useState(false);
  const [imageInfo, setImageInfo]= useState('');
  const [info, setInfo]= useState('');
  const [index, setIndex]= useState(false);
  const [scroll, setScroll]= useState(1020);
  const box = useRef(null);
  const [safar, setSafari] = useState(false);
  const [chrome, setChrome] = useState(false);
  const [pc, setPc] = useState(true);
  const [btn, setBtn] = useState(false);

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

    const resize = () => {
        if(window.innerWidth <=500){
          setPhoneTrue(true);
          setScroll(1470);
          setPc(false);
          return
        }else{
          setPc(true);
        }
      };
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    },[])

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

  function modalActiveDesactive() {
    console.log(modal);
    // window.scrollTo({
    //   top: scroll,
    // });
    
    const preventTouchScroll = (e) => {
      e.preventDefault();
    }
    if (!modal) {
      if(!phoneTrue){
      document.body.style.overflow = 'hidden';
      }
    } else {
      if(!phoneTrue){
      document.body.style.overflow = '';
      }
    }
  }

  useEffect(() => {
    const resize = async() => {
      setTimeout(()=>{
        if (window.innerWidth <= 335) {
          setWidthDots('20px');
          setMarginB('90px');
          setHeightDots('6px');
          setHeightImg('34px');
          SetSizeSeemore('0.95em');
          return
        }
        if (window.innerWidth <= 376) {
          setWidthDots('20px')
          setMarginB('70px');
          setHeightDots('6px');
          setHeightImg('34px');
          SetSizeSeemore('0.95em');
          return
        }
        if (window.innerWidth <= 400 && window.innerHeight <= 700 ) {
          setWidthDots('28px')
          setMarginB('55px');
          setHeightDots('6px');
          setMarginL('0px');
          setHeightImg('34px');
          SetSizeSeemore('0.95em');
          return
        }
        if (window.innerWidth <= 400 && window.innerHeight <= 850 ) {
          setWidthDots('28px')
          setMarginB('55px');
          setHeightDots('6px');
          setMarginL('0px');
          setHeightImg('34px');
          SetSizeSeemore('0.95em');
          return
        }
        if (window.innerWidth <= 430) {
          setWidthDots('28px')
          setMarginB('35px');
          setHeightDots('6px');
          setHeightImg('32px');
          SetSizeSeemore('0.95em');
          return
        }
        if (window.innerWidth <= 500) {
          setWidthDots('32px')
          setMarginB('35px');
          setHeightDots('6px')
          setHeightImg('29px');
          SetSizeSeemore('0.95em');
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

useEffect(()=>{
  if(modal && innerWidth<=750){
    document.querySelector("#btn").style.display = "none"
  }else if (modal==false && innerWidth<=750){
    document.querySelector("#btn").style.display = "block"
  }
},[modal])

  const CustomCarousel = styled(Carousel)`
  .carousel * {
    box-sizing: border-box;
    opacity: ${modal? '0.8': '1'};
}
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
    opacity:0.5;
}
`;

    const projectsData = [
      {
        title: 'Twitter clone', infoWebsite:'Twitter website' ,img:'https://res.cloudinary.com/db9qvgg30/image/upload/v1681701261/t_ahi9u8.png', 
        linkWeb: '', linkGitHub:'https://github.com/ezeflt/twitter-clone', 
        color:'#2b5687', background: true, imageInfo:'twit.png', imageInfo1:'twit.png',
        Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'},

        info: `Clone Twitter provides a complete social media experience. You can create an account
        , log in, and tweet your thoughts, ideas, and memorable moments. Additionally
        , you can create trends and share them with your network, and show appreciation for the content posted by other users
        . The user-friendly interface makes it easy to navigate and access all of these features
        . Join the Clone Twitter community today to discover all that we have to offer!
            `
      },
      {
        title: 'Ok Voiture', infoWebsite:'Car location website' ,img:'https://res.cloudinary.com/db9qvgg30/image/upload/v1681701539/okVoiture_md2rae.png', 
        linkWeb: '', linkGitHub:'https://github.com/ezeflt/okVoiture-location-website', 
        color:'#f5547e', imageInfo:'okV.png', 
        background: true, Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'},

        info: `Welcome to OkVoiture, the ultimate car rental website. With OkVoiture, you can easily rent a car, add your own cars to our marketplace,
         and filter your searches to find the perfect vehicle for your needs. And with our user-friendly interface,
          creating an account and logging in has never been easier. Start your car rental journey today with OkVoiture!
            `
      },
      {
        title: 'easy lease', infoWebsite:'B2B commerce Website' ,img:'https://res.cloudinary.com/db9qvgg30/image/upload/v1681701841/easy_ch84m5.png', 
        linkWeb: '', linkGitHub:'', 
        color:'#A066CB', background: true, imageInfo:'easyL.png', 
        Techno:{t1:'React', t2:'Next', t3:'Node Js', t4:'Express', t5:'Mongo DB'},

        info: `Introducing EasyLease, the ultimate solution for simplifying the life of business professionals
        . As a team project, EasyLease allows you to easily simulate and create contracts with enterprises
        , track your progress and earnings, and streamline your business processes. With our platform, everything is easier and more efficient
        . Join EasyLease today and experience the benefits for yourself!
            `
      },
      {
        title: 'locapic map', infoWebsite:'' ,img:'https://res.cloudinary.com/db9qvgg30/image/upload/v1681701801/locapic_oteutv.png', 
        linkWeb: '', linkGitHub:'https://github.com/ezeflt/Localisation-native-app', 
        color:'#ED7B62', background: false, imageInfo:'loca.png', 
        Techno:{t1:'React-Native ', t2:'Expo Js', t3:'Node Js', t4:'Express Js', t5:'Mongo DB'},

        info: `Introducing Locapic, the ultimate mobile app for geolocation enthusiasts. Built with React Native
        , our app allows you to easily pinpoint your location on a map, add destinations from around the world
        , and save all the countries and cities you've visited. Whether you're a traveler, adventurer or simply someone who loves exploring new places
        , Locapic is the perfect tool for you. Download Locapic today and start your next journey!
            `
      },
      {
        title: 'Selfie Native App', infoWebsite:'Native Applications Selfie' ,img:'https://res.cloudinary.com/db9qvgg30/image/upload/v1681701711/SelfieB_wmx78k.png', 
        linkWeb: '', linkGitHub:'https://github.com/ezeflt/Selfie-app-native', 
        color:'#75d7ff', background: true, imageInfo:'selfi.png', 
        Techno:{t1:'React-Native ', t2:'Expo Js', t3:'Node Js', t4:'Express Js', t5:'Mongo DB'},

        info: `With Selfie Native App, you have the ability to take photos from any angle, anywhere, and add each photo to your online gallery
        , reducing storage space and backing up each image online. With this powerful tool
        , you can easily capture life's precious moments and store them securely for years to come
        . Whether you're a professional photographer or just a casual snap-happy user
        , Selfie Native App makes it easy to create stunning photos and share them with the world
        . So why wait? Download Selfie Native App today and start capturing your memories in style!
            `
      }
    ]

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
                        <img src={data.img} className={styles.img} />
                          {!safar && pc&&(
                            <span className={styles.span}>{data.infoWebsite}</span>
                          )}
                      </div>
                      <div className={styles.info}>
                        <div className={styles.boxTitle}>
                          <span className={styles.title}>
                            {data.title}
                          </span>
                        </div>
                        <div className={styles.boxVisit}>
                          <span 
                         onMouseLeave={()=>animationBar && !safar?LineLeave(i): false} 
                         onMouseEnter={()=>animationBar && !safar?LineEnter(i): false}
                          style={{color:`${data.color}`}}
                            className={styles.spanVisit}>
                              Visite the website
                            </span>
                          <div id={`bar-${i}`} className={styles.bar}></div>
                          <a href='#seeMore' onClick={()=>{
                            modalActiveDesactive(),
                            setModal(!modal),
                            setImageInfo(data.imageInfo),
                            setInfo(data.info),
                            setTechno(data.Techno),
                            setColor(data.color)
                            }} className={styles.spanVisit} style={{fontSize:`${SizeSeemore}`}}>see more</a>
                        </div>
                        <div className={styles.boxGitHub}>
                          <a style={{cursor:'pointer', height:`${heightImg}`,marginRight:'5px'}}>
                            <img src='https://res.cloudinary.com/db9qvgg30/image/upload/v1681701973/figma_zetifr.png' alt='figma' style={{height:'100%', width:'auto'}} />
                          </a>
                          <a 
                          onClick={()=>window.open(`${data.linkGitHub}`, '_blank')} 
                          style={{cursor:'pointer', height:`${heightImg}`, margin:'0px 5px'}}>
                            <img src='https://res.cloudinary.com/db9qvgg30/image/upload/v1681701982/git_hf7vgv.png' alt='github' style={{height:'100%', width:'auto'}} />
                          </a>
                        </div>
                      </div>
                  </div>
              </div>
      )
    })
    useEffect(()=>{
      setIndex(true);
    },[])

    return (
      <div className={styles.WorkPage}>
        <div className={styles.NumberBox}>
          <span id='title' className={styles.titleWork}>Work</span>
        </div>
          {modal&&(
            <>
            <div id='seeMore' ref={box} className={styles.seeMore} >
              <div ref={box} className={styles.seeMore}>
                <FontAwesomeIcon onClick={()=>{modalActiveDesactive(),setModal(!modal)}} className={styles.icon} icon={faXmark} />
                    <main className={styles.box1}>
                      <div className={styles.boxImage}>
                        <img
                          className={styles.image}
                          src={imageInfo}
                        />
                      </div>
                    </main>
                    <main className={styles.box2}>
                      <div className={styles.boxText}>
                          <span style={{backgroundColor:`${color}`}}className={styles.techno}>{techno.t1}</span>
                          <span style={{backgroundColor:`${color}`}} className={styles.techno}>{techno.t2}</span>
                          <span style={{backgroundColor:`${color}`}} className={styles.techno}>{techno.t3}</span>
                          <span style={{backgroundColor:`${color}`}} className={styles.techno}>{techno.t4}</span>
                          <span style={{backgroundColor:`${color}`}} className={styles.techno}>{techno.t5}</span>
                        <p className={styles.p}>
                          {info}
                        </p>
                      </div>
                    </main>
                </div>
            </div>
            </>
          )}
          <CustomCarousel
          selectedItem={index ? CarouselRef.current.state.selectedItem: 0}
          swipeScrollTolerance={100}
          useKeyboardArrows={true}
          verticalSwipe={false}
          swipeable
          ref={CarouselRef}
          infiniteLoop={true}
          className={styles.boxWork}
          >
            
              {projects}
          </CustomCarousel>
      </div>
    );
};

export default WorkPage;