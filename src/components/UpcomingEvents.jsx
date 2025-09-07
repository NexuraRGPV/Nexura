import React, { useEffect, useRef, useState } from "react";
import styles from "./UpcomingEvents.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eventPhotos = [
  "/Aavinya/poster.jpg",
  "/Aavinya/grp.jpg",
  "/Aavinya/team.jpg",
  "/Aavinya/award1.jpg",
  "/Aavinya/award2.jpg",
  "/Aavinya/award3.jpg",
];

const UpcomingEvents = () => {
  const eventRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow auto-change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventPhotos.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = eventRef.current;

    // Text animation
    gsap.fromTo(
      el.querySelector(`.${styles.content}`),
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      el.querySelector(`.${styles.imageContainer}`),
      { x: 100, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={styles.container} id="events" ref={eventRef}>
      {/* Text Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Events!</h2>
        <h3>Avinya 2025 – Event Highlights</h3>
        <p>
          Official launch of Nexura Club at UIT-RGPV, Bhopal, initiated by the Department of Automobile Engineering.
        </p>
        <p>Date & Venue: May 2, 2025, UIT Conference Hall.</p>
        <p>
          Purpose: To empower students with skills in technology, design, and innovation through hands-on experiences.
        </p>
        <p>
          Domains introduced: 3D Animation, UI/UX Designing, Web Development, Parametric Modelling & Simulation, and Public Relations.
        </p>
        <p>
          Launch of the official Nexura website, serving as a hub for projects, updates, and student opportunities.
        </p>
        <p>
          Special screening of a 3D animation short film created by Nexura students, impressing the audience with creativity and storytelling.
        </p>
        <p>
          Organized an interactive Quiz Competition, encouraging participation and testing knowledge in tech and innovation.
        </p>
        <p>
          Winners of the quiz were awarded prizes, celebrating student talent and enthusiasm.
        </p>
        <p>
          Event was graced by Ma’am Alka Bani Agrawal (HOD, Automobile Engineering), who emphasized the importance of student clubs in shaping innovators.
        </p>
        <p>
          Inspiring words from Pawan Soni (Executive Member, Nexura) highlighted teamwork, creativity, and the freedom to innovate.
        </p>
        <p>
          Active contribution from student volunteers and Nexura teams ensured the event’s success and lively atmosphere.
        </p>
        <p>
          Overall, Avinya 2025 established Nexura as a platform where “Creation Leads, Victory Follows”, driving collaboration, creativity, and innovation on campus.
        </p>
      </div>

      {/* Image + Slideshow */}
      <div className={styles.imageContainer}>
        {/* Small Slideshow above main image */}
        <div className={styles.slideshow}>
          <img
            src={eventPhotos[currentIndex]}
            alt="Event slideshow"
            className={styles.slideImage}
          />
        </div>

        {/* Main Event Image */}
        <img
          src="/images/Eventsimg.png"
          alt="Upcoming Event"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
