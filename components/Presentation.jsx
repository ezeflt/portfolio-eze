/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import Typed from "react-typed";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import styles from "../styles/Presentation.module.css";
import { useState } from "react";

const Presentation = () => {
  let menuMobileStyle = {
    opacity: 0,
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
      backgroundColor: "#060810",
    };
  }
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

  const cardAnime = () => {
    gsap.fromTo(
      card.current,
      { y: -10 },
      { y: 10, repeat: -1, yoyo: "true", duration: 3 }
    );
  };
  const cardAnime2 = () => {
    gsap.fromTo(
      card2.current,
      { y: -10 },
      { y: 10, repeat: -1, yoyo: "true", duration: 3 }
    );
  };
  const flecheDownAnime = () => {
    gsap.fromTo(
      flecheDown.current,
      { y: 10 },
      { y: -10, repeat: -1, yoyo: "true", duration: 1 }
    );
  };
  useEffect(() => {
    if (
      typeof navigator !== "undefined" &&
      navigator.userAgent.indexOf("Chrome") !== -1
    ) {
      // Pour Chrome
      console.log("chrome");
      setChrome(true);
    } else if (
      typeof navigator !== "undefined" &&
      navigator.userAgent.indexOf("Safari") !== -1
    ) {
      // Pour Safari
      console.log("safari");
      setSafari(true);
    }
    cardAnime();
    cardAnime2();
    flecheDownAnime();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}></div>
        <div className={styles.main}>
          <div ref={card2} className={styles.photoMe}>
            <img src="n.png" style={{ height: "100%", width: "100%" }} />
          </div>
          
          <div className={styles.navBar}>
            <div className={styles.line}></div>
            <span className={styles.btnNav}>My Tools</span>
            <span className={styles.btnNav}>My projects</span>
            <span className={styles.btnNav}>Contact me</span>
          </div>
          <div className={styles.textPresente}>
            <Typed
              className={styles.spantxt}
              strings={[
                "Hello everyone",
                "Are you a customer ?",
                "Are you a recruiter ?",
                "Are you a start up ?",
                "no matter",
                "You are",
                "You are in the right place",
              ]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1000}
              loop
            >
              <span></span>
            </Typed>
          </div>
          {/* <div ref={card} className={styles.boxEzechiel}>
            <div className={styles.heightBox}>
              <div className={styles.boxImg}>
                <img src='BW1.png' className={styles.ih} />
              </div>
              <div className={styles.boxDescription}>
                <span
                  className={styles.txt}
                  style={{ margin: "5px 0px", opacity: "0.7" }}
                >
                  Felten Ezechiel
                </span>
                <span
                  className={styles.shadow}
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    margin: "5px 0px",
                    opacity: "0.7",
                  }}
                >
                  Frontend Developer
                </span>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>Age:</span><span className={styles.spanBottom}>20 <span style={{fontSize:'13px'}}>years</span></span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>Country:</span>
                  <span className={styles.spanBottom}>Belgium</span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>languages:</span>
                  <span className={styles.spanBottom}>French</span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}> </span>
                  <span
                    style={{ fontSize: "14px" }}
                    className={styles.spanBottom}
                  >
                    English
                  </span>
                </div>
                <div className={styles.EzeReseau}>
                  <img
                    src="lin.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/ezechiel-felten-475693248/")
                    }
                  />
                  <img
                    src="git.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      (window.location.href = "https://github.com/ezeflt")
                    }
                  />
                  <img
                    src="twitter.png"
                    style={{ height: "15px" }}
                    onClick={() =>
                      (window.location.href =
                        "https://twitter.com/toujours_plus_")
                    }
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.scrollDown}>
            <img
              src="scroll.png"
              style={{ height: "30px", visibility: "hidden" }}
            />
            <img
              ref={flecheDown}
              src="flechScroll.png"
              style={{ height: "20px", marginBottom: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.home2}>
      <div className={styles.boxPhoneEzechiel}>
      <div ref={card}className={styles.boxEzechiel}>
            <div className={styles.heightBox}>
              <div className={styles.boxImg}>
                <img src='BW1.png' className={styles.ih} />
              </div>
              <div className={styles.boxDescription}>
                <span
                  className={styles.txt}
                  style={{ margin: "5px 0px", opacity: "0.7" }}
                >
                  Felten Ezechiel
                </span>
                <span
                  className={styles.shadow}
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    margin: "5px 0px",
                    opacity: "0.7",
                  }}
                >
                  Frontend Developer
                </span>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>Age:</span><span className={styles.spanBottom}>20 <span style={{fontSize:'13px'}}>years</span></span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>Country:</span>
                  <span className={styles.spanBottom}>Belgium</span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}>languages:</span>
                  <span className={styles.spanBottom}>French</span>
                </div>
                <div className={styles.localE}>
                  <span className={styles.spanBottom}> </span>
                  <span
                    style={{ fontSize: "14px" }}
                    className={styles.spanBottom}
                  >
                    English
                  </span>
                </div>
                <div className={styles.EzeReseau}>
                  <img
                    src="lin.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      (window.location.href =
                        "https://www.linkedin.com/in/ezechiel-felten-475693248/")
                    }
                  />
                  <img
                    src="git.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      (window.location.href = "https://github.com/ezeflt")
                    }
                  />
                  <img
                    src="twitter.png"
                    style={{ height: "15px" }}
                    onClick={() =>
                      (window.location.href =
                        "https://twitter.com/toujours_plus_")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
        <div style={menuMobileStyle}>
          <ul className={styles.ulMenu}>
            <li
            onClick={
              ()=>{

                setAfficherMenu(!afficherMenu)  
          
              }
            }
            >
              <a href="#body">Home</a>
            </li>
            <li
             onClick={
              ()=>{

                setAfficherMenu(!afficherMenu)  
          
              }
            }>
              <a href="#mytools">My tools</a>
            </li>
            <li
             onClick={
              ()=>{

                setAfficherMenu(!afficherMenu)  
          
              }
            }>
              <a href="#myworks">My projects</a>
            </li>
            <li
             onClick={
              ()=>{

                setAfficherMenu(!afficherMenu)
          
              }
            }>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
        <ul>
        {/* <div className={styles.line}></div> */}
          <li>
            <a href="#body">Home</a>
          </li>
          <li>
            <a href="#mytools">My tools</a>
          </li>
          <li>
            <a href="#myworks">My projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <button
          onClick={() => {
            setAfficherMenu(!afficherMenu);
          }}
        >
          <FontAwesomeIcon icon={iconmenu} color={"#626266"} />
        </button>
        <div className={styles.blockPresentation}>
          <Typed
            className={styles.spantxt}
            strings={[
              "Hello everyone",
              "Are you a customer ?",
              "Are you a recruiter ?",
              "Are you a start up ?",
              "no matter",
              "You are",
              "You are in the right place",
            ]}
            typeSpeed={30}
            backSpeed={30}
            backDelay={1000}
            loop
          ></Typed>
          <span>
            Felten Ezechiel Portfolio <span style={{fontSize:'0.6em'}}>©</span>
          </span>
          <span>
            Frontend Developer web & mobile.
          </span>
          <span>
            UI|UX Design.
          </span>
          <div className={styles.blockButtons}>
            <button>About Me</button>
            <button>Download CV</button>
          </div>
          <div className={styles.boxReseaux}>
            <img
              src="lin.png"
              style={{ cursor: "pointer", height: "28px", width: "auto" }}
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ezechiel-felten-475693248/")
              }
            />
            <img
              src="git.png"
              style={{ cursor: "pointer", height: "30px", width: "auto" }}
              onClick={() =>
                (window.location.href = "https://github.com/ezeflt")
              }
            />
            <img
              src="insta.png"
              style={{ cursor: "pointer", height: "30px", width: "auto" }}
              onClick={() =>
                (window.location.href = "https://www.instagram.com/eze_flt/")
              }
            />
          </div>
        </div>
        </div>
    </>
  );
};

export default Presentation;