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

const Presentation = (props) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 500) {
        setMobile(true);
        console.log(mobile);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [mobile]);

  let menuMobileStyle = {
    opacity: 0,
    display: "none",
    visibility: "hidden",
    transition: "all .3s",
    top: 0,
    left: 0,
    height: "100%",
    width: "80%",
    backgroundColor: "#10101a",
  };

  const [afficherMenu, setAfficherMenu] = useState(false);

  let iconmenu = faBars;

  if (afficherMenu) {
    iconmenu = faXmark;
    menuMobileStyle = {
      display: "block",
      zIndex: 10000,
      opacity: 1,
      visibility: "visible",
      transition: "all .3s",
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "#10101a",
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
  const logoRef = useRef(null);
  const [safar, setSafari] = useState(false);
  const [chrome, setChrome] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [modalAbout, setModalAbout] = useState(false);
  const [phoneTrue, setPhoneTrue] = useState(false);

  const desactiveAboutModal = () => {
    !phoneTrue
      ? (gsap.to("#paragraphe", { y: -600, duration: 1.3 }),
        setTimeout(() => {
          setModalAbout(false);
        }, 850))
      : setModalAbout(false);
  };
  const animationParagraphe = () => {
    gsap.fromTo("#paragraphe", { y: -600 }, { y: 0, duration: 2 });
  };
  const logo = () => {
    gsap.fromTo(
      logoRef.current,
      { y: -5 },
      { y: 5, duration: 2, repeat: -1, yoyo: "true" }
    );
  };
  const cardAnime = () => {
    gsap.fromTo(
      card.current,
      { y: -10 },
      { y: 10, repeat: -1, yoyo: "true", duration: 5 }
    );
  };
  const cardAnime2 = () => {
    gsap.fromTo(
      card2.current,
      { y: -10 },
      { y: 10, repeat: -1, yoyo: "true", duration: 3}
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
  }, [props.anime]);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth <= 500) {
        setPhoneTrue(true);
        return;
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [phoneTrue]);
  useEffect(() => {
    if (modalAbout ) {
      !phoneTrue && animationParagraphe();
      logo();
    }
  }, [modalAbout]);

  const open = () => {
    if (afficherMenu) {
      gsap.to("#cardEze", {
        y: -10,
        transform:
          "perspective(400px) rotateY(-35deg) perspective(18000px) rotateX(10deg)",
        duration: 0,
      });
    } else {
      gsap.to("#cardEze", {
        y: -10,
        transform:
          "perspective(400px) rotateY(0deg) perspective(18000px) rotateX(0deg)",
        duration: 0,
      });
    }
  };

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
                "It doesn't matter",
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
      {modalAbout && (
        <main
          style={{ display: `${modalAbout ? "flex" : "none"}` }}
          className={styles.aboutMe}
        >
          <FontAwesomeIcon
            onClick={() => desactiveAboutModal()}
            className={styles.icon}
            icon={faXmark}
          />
          <img ref={logoRef} id={styles.me} src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682386634/EF1_w4tjnw.png" />
          <div className={styles.boxParagraphe}>
            <p id="paragraphe" className={styles.paragraphe}>
              Hello, let me introduce myself, I am a young man of 20 years old,
              born in Belgium. I recently moved to France in May 2022. This is
              where it all Commenced. My passion for web development started
              during a discussion with some people. Curious by nature, I decided
              to go on Youtube to find out what it could mean. I quickly became
              addicted to work and started learning web programming classics
              such as HTML and CSS. Hours passed without me realizing it, and
              that's when I decided to join a bootcamp in October 2022.
              LaCapsule was my first training, and I was blown away by
              everything I learned there. I discovered large scale programming
              with Js front-end and back-end, React Js, Next Js, Express Js,
              Node Js, with basic database manipulations like Mongo DB, as well
              as design tools like Figma for UI/UX and Trello for time
              management. I also had the opportunity to work in an organized
              team, Git/GitHub helped us a lot, which was a very rewarding
              experience. After taking this three-month course, I decided to
              continue my learning by joining LaPasserelle to learn PHP with
              Symfony, Git, MongoDb, SQL, MySQL, and everything related to
              backend development in general. I was fascinated by the complexity
              and power of these languages, and quickly filled my skills box
              with more programming languages and project experience. The
              world of web development is so vast and exciting that I decided to
              continue my learning by enrolling in the second year at the Hetic
              school. My goal is to become the best possible developer by
              continuing to learn and discover new technologies. Get ready, I'm
              coming soon to your company to be among the best. I am ready to
              take up all challenges to shine and achieve my goals.
            </p>
          </div>
        </main>
      )}
      <div className={styles.home2}>
        <div className={styles.blockPresentation}>
          <Typed
            className={styles.spantxt}
            strings={[
              "Hello everyone",
              "Are you a customer ?",
              "Are you a recruiter ?",
              "Are you a start up ?",
              "It doesn't matter",
              "You are",
              "You are in the right place",
            ]}
            typeSpeed={30}
            backSpeed={30}
            backDelay={1000}
            f
            loop
          ></Typed>
          <span>
            Felten Ezechiel Portfolio{" "}
            <span style={{ fontSize: "0.6em" }}>©</span>
          </span>
          <span>Frontend Developer web & mobile.</span>
          <span>UI|UX Design.</span>
          <div className={styles.blockButtons}>
            <a onClick={() => setModalAbout(true)}>About Me</a>
            <a href="Cv. Felten Ezechiel.pdf" download>
              Download CV
            </a>
          </div>
          <div className={styles.boxReseaux}>
            <img
              src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682392080/lin_iuse5b.png"
              style={{ cursor: "pointer", height: "28px", width: "auto" }}
              onClick={() =>
                mobile
                  ? (window.location.href =
                      "https://www.linkedin.com/in/ezechiel-felten-475693248/")
                  : window.open(
                      "https://www.linkedin.com/in/ezechiel-felten-475693248/",
                      "_blank"
                    )
              }
            />
            <img
              src="https://res.cloudinary.com/db9qvgg30/image/upload/v1681701982/git_hf7vgv.png"
              style={{ cursor: "pointer", height: "30px", width: "auto" }}
              onClick={() =>
                mobile
                  ? (window.location.href = "https://github.com/ezeflt")
                  : window.open("https://github.com/ezeflt", "_blank")
              }
            />
            <img
              src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682392156/insta_tjrq2z.png"
              style={{ cursor: "pointer", height: "30px", width: "auto" }}
              onClick={() =>
                mobile
                  ? (window.location.href =
                      "https://www.instagram.com/eze_flt/")
                  : window.open("https://www.instagram.com/eze_flt/", "_blank")
              }
            />
          </div>
        </div>
        <div className={styles.boxPhoneEzechiel}>
          <div id="cardEze" ref={card} className={styles.boxEzechiel}>
            <div className={styles.heightBox}>
              <div className={styles.boxImg}>
                <img src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682392316/BW1_ayqzjz.png" className={styles.ih} />
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
                  <span className={styles.spanBottom}>Age:</span>
                  <span className={styles.spanBottom}>
                    20 <span style={{ fontSize: "13px" }}>years</span>
                  </span>
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
                    src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682392080/lin_iuse5b.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      mobile
                        ? (window.location.href =
                            "https://www.linkedin.com/in/ezechiel-felten-475693248/")
                        : window.open(
                            "https://www.linkedin.com/in/ezechiel-felten-475693248/",
                            "_blank"
                          )
                    }
                  />
                  <img
                    src="https://res.cloudinary.com/db9qvgg30/image/upload/v1681701982/git_hf7vgv.png"
                    style={{ height: "20px" }}
                    onClick={() =>
                      mobile
                        ? (window.location.href = "https://github.com/ezeflt")
                        : window.open("https://github.com/ezeflt", "_blank")
                    }
                  />
                  <img
                    src="https://res.cloudinary.com/db9qvgg30/image/upload/v1682392236/twitter_j5fymu.png"
                    style={{ height: "15px" }}
                    onClick={() =>
                      mobile
                        ? (window.location.href =
                            "https://twitter.com/toujours_plus_")
                        : window.open(
                            "https://twitter.com/toujours_plus_",
                            "_blank"
                          )
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
              onClick={() => {
                open();
                setAfficherMenu(!afficherMenu);
              }}
            >
              <a href="#body">Home</a>
            </li>
            <li
              onClick={() => {
                open(), setAfficherMenu(!afficherMenu);
              }}
            >
              <a href="#tools">tools</a>
            </li>
            <li
              onClick={() => {
                open();
                setAfficherMenu(!afficherMenu);
              }}
            >
              <a href="#title">projects</a>
            </li>
            <li
              onClick={() => {
                open();
                setAfficherMenu(!afficherMenu);
              }}
            >
              <a href="#contact">Contact</a>
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
          id="btn"
          onClick={() => {
            setAfficherMenu(!afficherMenu);
            open();
          }}
        >
          <FontAwesomeIcon fontSize={"2px"} icon={iconmenu} color={"#626266"} />
        </button>
      </div>
    </>
  );
};

export default Presentation;
