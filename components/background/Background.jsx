// import React, { useLayoutEffect, useState } from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useSpring, animated } from 'react-spring'


const Background = (props) => {
    function masquerErreursEtAvertissements(message, source, ligne) {
        // Ne rien faire pour les messages d'erreur ou d'avertissement
      }
      console.error = masquerErreursEtAvertissements;
      console.warn = masquerErreursEtAvertissements;

    // var propsi = props.links

    const linksOpacity = useSpring({
        opacity: props.links,
        config: {duration: 800}
      })
    //   console.log(props.links);

    const particlesInit = useCallback(async engine => {
        console.log();
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log();
    }, []);
    return (
  <animated.div style={linksOpacity}>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        pauseOnBlur: false,
        fullScreen:{
            enable: true,
        },
        style:{
            height: "100%",
            width: "100%",
            opacity:"0.5",
        },
        zIndex: {
            random: {
                enable: false,
                minimumValue: 0
            },
            value: -1,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1
        },
        background: {
            background: {
                value: '#10101a',
            },
        },
        fpsLimit: 30,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    // mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: ["bubble", "repulse"],
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 70,
                    duration: 2,
                },
                remove: {
                    quantity: 1
                },
                grab: {
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    links:{
                        opacity:0,
                    },
                },
            },
        },
        particles: {
            color: {
                value: '#fff',
            },
            links: {
                color: '#fff',
                distance: 170,
                enable: true,
                opacity: 0.1,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.7,
                straight: true,
            },
            number: {
                density: {
                    enable: true,
                    area: 1000,
                },
                value: 100,
            },
            opacity: {
                value: 0.08,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
      }} 
    />
  </animated.div>
);
};

export default Background;