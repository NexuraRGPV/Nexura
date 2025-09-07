import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    // Hero logo animation
    gsap.fromTo(
      el.querySelector(".hero-logo"),
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      }
    );

    // Hero title animation
    gsap.fromTo(
      el.querySelector(".hero-title"),
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Hero paragraph animation
    gsap.fromTo(
      el.querySelector("p"),
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-content">
        {/* Left - Logo */}
        <div className="hero-left">
          <img
            src="/images/NavLogo.png"
            alt="Nexura Logo"
            className="hero-logo"
          />
        </div>

        {/* Right - Heading + Text */}
        <div className="hero-right">
          <h1 className="hero-title">WELCOME TO NEXURA!</h1>
          <p>
            Nexura is a student-led club under the Department of Automobile
            Engineering at UIT-RGPV, Bhopal, dedicated to nurturing talent and
            fostering interdisciplinary collaboration. We equip students with
            practical skills and innovative mindsets to excel in emerging
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
