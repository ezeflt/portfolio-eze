import { useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import styles from '../styles/Techno.module.css'
import { useRef } from 'react';
import { useEffect } from 'react';
import { faL } from '@fortawesome/free-solid-svg-icons';


const Techno = () => {
    function masquerErreursEtAvertissements(message, source, ligne) {
        // Ne rien faire pour les messages d'erreur ou d'avertissement
      }
      console.error = masquerErreursEtAvertissements;
      console.warn = masquerErreursEtAvertissements;

    const [maj, setMaj]= useState(true);
    const [imageBox, setImageBox] = useState('nodeColor.png');
    const [safariImageBox, setSafariImageBox] = useState('');
    const [titleBox, setTitleBox] = useState('Node Js');
    const [time, setTime] = useState('7 Months');
    const [start, setStart] = useState('2022');
    const [test, setTest] = useState(false);
    const [safar, setSafari] = useState(false);
    const [chrome, setChrome] = useState(false);
    const [imgFloat, setImgFloat] = useState(false);
    const [gsapAnime, setGsapAnime] = useState(false);
    const [defaultBox, setDefaultBox] = useState(false);
    const imgRef = useRef(null);
    const [scale, setScale] = useState('1');
    const React = useRef(null)
    const logo = useRef(null)
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{

        gsap.fromTo(logo.current,{y:-10},{y:10, duration:5, repeat:-1, yoyoEase:'power2.easeIn', yoyo:true})

        if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Chrome') !== -1) {
            // Pour Chrome
            console.log('chrome');
            setChrome(true)
          } else if (typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Safari') !== -1) {
            // Pour Safari
            console.log('safari');
            setSafari(true)
          }
        const resize = async () => {
            if (window.innerWidth < 1300) {
                setScale('0.85');
            }
            if (window.innerWidth < 1275) {
                setScale('0.85');
            }
            if (window.innerWidth < 1270 ) {
                setSafari(true);
                setDefaultBox(true);
            }
            if (window.innerWidth > 1270 && chrome) {
                setSafari(false);
            }
            if (window.innerWidth < 1200) {
            }  
            if (window.innerWidth < 1200) {
                setScale('0.9');
            } if (window.innerWidth > 1200) {
                setScale('1');
            } if (window.innerWidth <= 1189) {
                setImgFloat(false)
            }
            if (window.innerWidth > 1189) {
                setImgFloat(true)
            }
            if (window.innerWidth < 1380) {
            setScale('0.95');
            }
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);

    },[maj, gsapAnime])

    const change =()=>{
        setChrome(!chrome);
        setSafari(!safar);
    }

    const image = [
        {src: 'htmlColor.png', title: 'HTML', time: '1 Years', startYears:'2022'},
        {src: 'cssColor.png', title: 'CSS', time: '1 Years' , startYears:'2022'},
        {src: 'jsColor.png', title: 'JavaScript', time: '7 Months' , startYears:'2022'},
        {src: 'tsColor.png', title: 'Typescript', time: '1 Months' , startYears:'2023'},
        {src: 'php4.png', title: 'PHP', time: '3 Months' , startYears:'2023'},
        {src: 'symfony.png', title: 'Symfony', time: '3 Months' , startYears:'2023'},
        {src: 'reactColor.png', title: 'React Js', time: '7 Months' , startYears:'2022'},
        {src: 'nodeColor.png', title: 'Node Js', time: '7 Months' , startYears:'2022'},
        {src: 'sql.png', title: 'SQL', time: '3 Months' , startYears:'2023'},
        {src: 'mysql.png', title: 'My SQL', time: '3 Months' , startYears:'2023'},
        {src: 'gitMauve.png', title: 'GitHub', time: '7 Months' , startYears:'2022'},
        {src: 'mongoColor.png', title: 'Mongo DB', time: '7 Months' , startYears:'2022'},
    ]

    const cubeReact = (
        <div className={styles.cube} style={{marginLeft:'950px',marginTop:'380px', position:'absolute', zIndex:'500'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='reactColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeTs = (
        <div className={styles.cube} style={{marginLeft:'250px',marginTop:'370px', position:'absolute', zIndex:'500'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='tsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeNode = (
        <div className={styles.cube} style={{right:'20px',marginTop:'240px', position:'absolute', zIndex:'500'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='nodeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeMongo = (
        <div className={styles.cube} style={{right:'150px',marginTop:'210px', position:'absolute', zIndex:'500'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='mongoColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeJs = (
        <div className={styles.cube} style={{marginTop: '20%'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='jsColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeCss = (
        <div className={styles.cube} style={{marginTop:'150px', left:'20px'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='cssColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )
    const cubeCode = (
        <div className={styles.cube} style={{marginLeft: '93%', marginTop:'15%'}}>
                        <div className={`${styles.face} ${styles.front}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.back}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.left}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.right}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                        <div className={`${styles.face} ${styles.bot}`}>
                            <img src='codeColor.png' style={{height:'25px', width:'23px'}}/>
                        </div>
                    </div>
    )

    const box = image.map((data, i)=>{
        return(
            !safar ?(
                <div className={styles.boxBorderSkills} key={i} onClick={()=>(
                    setImageBox(data.src),
                    console.log(imageBox),
                    setTest(!test),
                    console.log(test),
                    setTitleBox(data.title),
                    setTime(data.time),
                    setStart(data.startYears)
                )}>
                    <img src={data.src} className={!safar ? `${styles.img}`:`${styles.imgSafari}`} />
                </div>
            ) : (
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', margin:'10px'}} >
                <div className={styles.boxBorderSkillSafari} key={i} onClick={()=>(
                    console.log('oou'),
                    gsap.fromTo('#imgRef', {x:'30px', autoAlpha:0},{x:'0px', autoAlpha:1}),
                    // setImageBox(data.src),
                    // setTest(!test),
                    // setTitleBox(data.title),
                    // setGsapAnime(!gsapAnime),
                    setSafariImageBox(data.src)
                )}>
                    <img src={data.src} className={!safar ? `${styles.img}`:`${styles.imgSafari}`} />
                </div>
                <span className={styles.fontTitleSafari} >{data.title}</span>
            </div>
            )
        )
    })
    if(safar){
        return(
        <div style={{display:`${chrome&&!defaultBox ? 'none':'block'}`}}  id="mytools" className={styles.home1}>
        <div className={styles.header2}>
            <span onClick={()=>change()} className={`${styles["header-txt2"]}`}>TECHNO</span>
        </div>
        <div id='tools' className={styles.main2}>
            {/* <img src='look.png' className='me' /> */}
            {safar&&(
                <>
                {imgFloat&&(
                    <div id='imgRef' ref={imgRef} className={styles.imgFloat}><img style={{height:'250px', width:'auto'}} src={safariImageBox} /></div>
                )}
                <div className={styles.boxToolSafari}>
                <div className={styles.boxParameterSafari}>
                    <div style={{width:'100%', height:'15%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {/* <span className={styles.txt2} style={{color:'#fff', fontSize:'1.5rem', textTransform:'uppercase', margin:'10px 0px'}}> My tools</span> */}
                    </div>
                    <div className={styles.boxInfoSafari}>
                        <div className={styles.boxInfosSkillSafari}>
                            {box}
                        </div>
                    </div>
                </div>
                </div>
                </>
            )}
        </div>
    </div>
        )
    }else{
        return (
            <div  style={{display:`${safar && 'none'}`}} className={styles.home2}>
                <div className={styles.header2}>
                    <span onClick={()=>change()} id="mytools" className={`${styles["header-txt2"]}`}>TECHNO</span>
                </div>
                <div className={styles.main2}>
                        <div style={{transform:" perspective(400px)rotateY(+35deg)perspective(18000px) rotateX(5deg)"}} className={styles.boxTools}>
                        <div className={styles.boxParameter}>
                            <div style={{width:'100%', height:'15%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <span className={styles.txt2} style={{color:'#fff', fontSize:'1.5rem', textTransform:'uppercase'}}> My tools</span>
                            </div>
                            <div className={styles.boxInfos}>
                                <div className={styles.boxInfosSkills}>
                                    {box}
                                </div>
                            </div>
                        </div>
                        </div>
                    
                        <div className={styles.boxSkills} >
                        <div className={styles.boxParameter}>
                            <div style={{width:'100%', height:'15%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <span className={styles.txt2} style={{color:'#fff', fontSize:'1.5rem'}}> My tools</span>
                            </div>
                            <div className={styles.boxInfos}>
                                <div className={styles.imgBox}>
                                    <img src={imageBox} className={styles.svg2} style={{height: '90.6%'}} />
                                </div>
                                <div style={{display:'flex', height:'auto', width:'60%', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                    <div style={{height:'auto', width:'100%', display:'flex', alignItems:'center', justifyContent:'center',padding:'10px 0px'}}>
                                        <span className={styles.txt2} style={{color:'#fff', fontSize:'2.5rem'}}> {titleBox}</span>
                                    </div>
                                    <div style={{height:'auto', width:'80%', display:'flex', alignItems:'center', justifyContent:'space-between',margin:'20px 0px'}}>
                                        <span className={styles.spanBottom} style={{fontSize:'1rem'}}>Time spent:</span>
                                        <span className={styles.spanBottom} style={{fontSize:'1rem'}}> {time}</span>
                                    </div>
                                    <div style={{height:'auto', width:'80%', display:'flex', alignItems:'center', justifyContent:'space-between',margin:'0px 0px'}}>
                                        <span className={styles.spanBottom} style={{fontSize:'1rem'}}>Start year:</span>
                                        <span className={styles.spanBottom} style={{fontSize:'1rem'}}>In {start}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <>
                    <div style={{scale:scale}} className={styles.ImgPresentation}>
                        <img ref={logo} src={imageBox} className={styles.svg2} style={{height: '51.6%', scale:scale}} />
                    </div>
                    <div style={{scale:'1'}} className={styles.circle1D}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.circle3D}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.test}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.test_b}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.test_c}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.testX}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.test_y}>
    
                    </div>
                    <div style={{scale:scale}} className={styles.test2}>
                        {cubeCode}
                    </div>
                    <div style={{scale:scale}} className={styles.test3}>
                        {cubeCss}
                    </div>
                    <div style={{scale:scale}} className={styles.test4}>
                        {cubeMongo}
                        {cubeJs}
                        {cubeReact}
                        {cubeTs}
                        {cubeNode}
                    </div>
                    </>   
                </div>
            </div>
        );
    }
    
};

export default Techno;