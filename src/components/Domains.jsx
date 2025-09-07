import React, { useEffect, useRef } from "react";
import "./Domains.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    title: "UI/UX Designing",
    img: "/images/UI-UX.png",
    desc: "Dedicated to enhancing user interaction, this domain focuses on creating smooth and engaging user interfaces. Members work on modern design trends to deliver high-quality digital experiences, bridging the gap between functionality and aesthetics."
  },
  {
    title: "Public Relation and Operation",
    img: "/images/PR.png",
    desc: "As the backbone of the club's operations, this domain handles outreach, partnerships, and event management. Members ensure smooth communication and organize activities to build the Nexura brand."
  },
  {
    title: "Web Development",
    img: "/images/webdev.png",
    desc: "This domain builds and maintains web platforms, ensuring cutting-edge digital presence. From front-end designs to back-end functionality, members explore various web technologies, contributing to projects that enhance both usability and performance."
  },
  {
    title: "3D Modelling and Animation",
    img: "/images/3d.png",
    desc: "This domain specializes in creating stunning visual content through VFX and 3D design. It brings ideas to life with immersive models and animations, contributing to various creative projects, including automotive visualization."
  },
  {
    title: "Parametric Modelling and Simulation",
    img: "/images/PMS.png",
    desc: "Focused on precision engineering, this domain leverages tools like ANSYS and SolidWorks to develop and analyze high-performance designs. Members explore advanced simulations to optimize structures for real-world applications, ensuring efficiency and reliability in automotive engineering."
  }
];

const Domains = () => {
  const domainsRef = useRef(null);

  useEffect(() => {
    const cards = domainsRef.current.querySelectorAll(".card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.2, // stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="domains" ref={domainsRef}>
      <h2 className="domains-title">Our Domains</h2>
      <div className="domains-flex">
        <div className="row">
          {domains.slice(0, 3).map((domain, i) => (
            <div className="card" key={i}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={domain.img} alt={domain.title} />
                  <h3>{domain.title}</h3>
                </div>
                <div className="card-back">
                  <p>{domain.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row second-row">
          {domains.slice(3).map((domain, i) => (
            <div className="card" key={i}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={domain.img} alt={domain.title} />
                  <h3>{domain.title}</h3>
                </div>
                <div className="card-back">
                  <p>{domain.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;
