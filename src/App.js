import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Domains from "./components/Domains";
import AboutUs from "./components/AboutUs";
import UpcomingEvents from "./components/UpcomingEvents";
import OurServices from "./components/ourService";
import Coordinators from "./components/coordinators";
import FAQ from "./components/FAQ";
import Contact from "./components/CONT";
import HomePage from"./webdev/components/Homepage";
import HomepagePM from "./para/components/HomepagePM";
import Homepage3d from "./threed/components/Homepage3d";
import HomePagepr from "./pr/components/Homepagepr";



import "./App.css";

// gsap import
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomepageUI from "./uiux/components/HomepageUI";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Sections scroll animation
    gsap.utils.toArray(".section").forEach((sec) => {
      gsap.fromTo(
        sec,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Circles parallax animation
    gsap.utils.toArray(".glow-circle").forEach((circle, i) => {
      gsap.to(circle, {
        y: (i % 2 === 0 ? 100 : -100), // odd/even ke liye alag move
        x: (i % 3 === 0 ? 80 : -80),   // thoda diagonal bhi
        scale: 1.2,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: circle,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default route (Landing Page) */}
        <Route
          path="/"
          element={
            <div className="App">
              <div className="glow-circle circle1"></div>
              <div className="glow-circle circle2"></div>
              <div className="glow-circle circle3"></div>
              <div className="glow-circle circle4"></div>
              <div className="glow-circle circle5"></div>
              <div className="glow-circle circle6"></div>
              <div className="glow-circle circle7"></div>
              <div className="glow-circle circle8"></div>
              <div className="glow-circle circle9"></div>
              <div className="glow-circle circle10"></div>

              {/* Har component ko ek section class do */}
              <div className="section"><Navbar /></div>
              <div className="section"><Hero /></div>
              <div className="section"><Domains /></div>
              <div className="section"><UpcomingEvents /></div>
              <div className="section"><OurServices /></div>
              <div className="section"><Coordinators /></div>
              <div className="section"><FAQ /></div>
              <div className="section"><Contact /></div>
              
              
              
              
            </div>
          }
        />

        {/* ✅ Web Development -> Homepage.jsx */}
        

        <Route path="/webdev" element={<HomePage />} />
        <Route path="/uiux" element={<HomepageUI />} />
        <Route path="/para" element={<HomepagePM />} />
        <Route path="/three_d" element={<Homepage3d />} />
        <Route path="/pr" element={<HomePagepr />} />

      </Routes>
    </Router>
  );
}

export default App;
