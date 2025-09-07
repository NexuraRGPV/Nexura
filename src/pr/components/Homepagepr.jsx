import { useState, useEffect, useRef } from "react";
import "../assets/Homepagepr.css";
import CustomScrollbarpr from "./CustomScrollbarpr";
import Contactpr from "./Contactpr";
import ProjectCardpr from "./ProjectCardpr";
import Dropdown from "./Teampr";

import harry from "../assets/pr1/projects/harry potter prototype.gif";
import food from "../assets/pr1/projects/JUICY CAN SPIN.gif";
import School from "../assets/pr1/projects/School Webpage.png";
import headphone from "../assets/pr1/projects/pinterest app prototype.gif";
import landing from "../assets/pr1/projects/Landing page.png";
import nike from "../assets/pr1/projects/NIKE WEBSITE.png";
import travel from "../assets/pr1/projects/Animation.gif";
import flow from "../assets/pr1/projects/Flow 1@512p-25fps (14).gif";

// -------------------- Projects Data --------------------
const projectsData = [
  {
    cardTitle: "Harry potter prototype",
    cardDescription: "Harry potter prototype",
    title: "Harry potter prototype",
    videoSrc: harry,
    thumbnail: harry,
  },
  {
    cardTitle: "Nike",
    cardDescription: "Nike website",
    title: "Nike",
    videoSrc: nike,
    thumbnail: nike,
  },
  {
    cardTitle: "Juicy Can",
    cardDescription: "Juicy Can spinning website",
    title: "Juicy Can spinning website",
    videoSrc: food,
    thumbnail: food,
  },
  {
    cardTitle: "Pintrest",
    cardDescription: "Pintrest app ui",
    title: "Pintrest app ui",
    videoSrc: headphone,
    thumbnail: headphone,
  },
  {
    cardTitle: "Travel",
    cardDescription: "Travel website",
    title: "Travel",
    videoSrc: travel,
    thumbnail: travel,
  },
  {
    cardTitle: "Flow",
    cardDescription: "Flow website",
    title: "Flow",
    videoSrc: flow,
    thumbnail: flow,
  },
];

// -------------------- HomepageUI Component --------------------
const Homepagepr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const laptopContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Scroll animation handler
  const handleScroll = () => {
    if (!laptopContainerRef.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const laptopElement = laptopContainerRef.current;
    const laptopRect = laptopElement.getBoundingClientRect();

    const visibleHeight =
      Math.min(windowHeight, laptopRect.bottom) - Math.max(0, laptopRect.top);

    const maxScroll = windowHeight * 0.6;
    const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

    setScrollProgress(progress);
    setIsFullyScrolled(progress >= 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video speed control
  useEffect(() => {
    const video = document.getElementById("laptop-video");
    if (video) {
      video.playbackRate = 0.75;
    }
  }, []);

  // Animation styles
  const laptopStyle = {
    transform: `
      perspective(2000px)
      rotateX(${15 - scrollProgress * 15}deg)
      scale(${0.8 + scrollProgress * 0.8})
      translateY(${scrollProgress * -20}vh)
    `,
    transition: "transform 0.3s ease-out",
  };

  const screenStyle = {
    transform: `translateY(${scrollProgress * -2}%)`,
    borderRadius: `${20 - scrollProgress * 20}px ${
      20 - scrollProgress * 20
    }px 0 0`,
    transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
  };

  const progressBarStyle = {
    width: `${Math.min(scrollProgress * 100, 100)}%`,
    transition: "width 0.1s ease-out",
  };

  // Progress text animation
  const [progress, setProgress] = useState(0);
  const labels = [
    "Initializing Nexura.PR...",
    "Injecting creativity.fig...",
    "Redesigning innovation...",
    "Testing Design...",
    "Execution complete ✅",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 25));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const labelIndex = progress / 25;

  // Auto-scroll to features after delay
  useEffect(() => {
    const scrollToSection = document.querySelector(".features");
    const timeoutId = setTimeout(() => {
      if (scrollToSection) {
        scrollToSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // -------------------- JSX --------------------
  return (
    <div className="homepage">
      <CustomScrollbarpr />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={progressBarStyle}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="heroui">
        <div
          className="laptop-container"
          ref={laptopContainerRef}
          style={laptopStyle}
        >
          <div className="laptop-frame">
            <div className="laptop-screen" style={screenStyle}>
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  
                  <div className="video-overlay"></div>
                </div>

                <div className="laptop-header">
                  <div className="laptop-logo">
                    <span className="logo-dot"></span>
                    Nexura
                  </div>
                </div>
                <div className="laptop-body">
                  <div className="hero-content">
                    <h1>
                      <span>&lt; Nexura &gt;</span>
                      We make it pretty
                      <span>and Smart!!</span>
                    </h1>
                    <p>Blending beauty with usability.</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">Learn More</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                    <div className="analyzing-text">
                      {labels[labelIndex]}
                      <span className="percentage"> {progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${progress}%`,
                          transition:
                            progress === 0
                              ? "none"
                              : "width 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className={`scroll-down-indicator ${
            scrollProgress > 0.1 ? "fade-out" : ""
          }`}
        >
          <div className="scroll-arrow"></div>
          <div className="scroll-text">Scroll to Fetch</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>WHY US?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Mentorship That Matters</h3>
            <p>
              Learn from experienced developers who guide you through every
              challenge.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Experience</h3>
            <p>
              Build real-world projects, join hackathons, and go beyond just
              theory.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Collaboration</h3>
            <p>Connect, code, and create with like-minded tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust & Reliability</h3>
            <p>
              Whether for college projects or professional freelancing, we
              prioritize transparency, security, and quality in every project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>
            For PR at <span className="small">(Nexura)</span>
          </h2>
          <p>
            At Nexura, we believe communication is the bridge between ideas and people. Our PR team ensures that the club’s vision and achievements are shared with clarity, creativity, and impact.

          </p>
          
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>What We Do
</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Brand Representation</h3>
            <p>
              Shaping Nexura’s identity across platforms.

            </p>
          </div>
          <div className="service-card">
            <h3>
Media & Outreach</h3>
            <p>
              Engaging audiences through press, social media, and campaigns.
            </p>
          </div>
          <div className="service-card">
            <h3>Event PR</h3>
            <p>
              Managing publicity and visibility for all major initiatives.

            </p>
          </div>
          <div className="service-card">
            <h3>Partnerships </h3>
            <p>
              Building strong ties with sponsors, mentors, and collaborator
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section 
      <section id="projects" className="services">
        <h2>Our Projects</h2>
        <div className="services-container">
          {projectsData.map((project, index) => (
            <ProjectCardpr
              key={index}
              cardTitle={project.cardTitle}
              cardDescription={project.cardDescription}
              title={project.title}
              videoSrc={project.videoSrc}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </section>*/}

      {/* Team Section */}
      <section id="Team" className="services">
        <h2>Brains Behind the Nexura</h2>
        <Dropdown />
      </section>

      {/* Contact Section */}
      <Contactpr />

      {/* Footer */}
      <section id="contactSection">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <h2>Nexura</h2>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h3>Navigation</h3>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>

                  <li>
                    <a href="#open-source">About Us</a>
                  </li>
                  <li>
                    <a href="#Team">Team</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                
              </div>
              <div className="footer-section">
                <h3>Connect</h3>
                <ul className="social-links">
                  <li>
                    <a href="https://github.com/NexuraRGPV">GitHub</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nexura_rgpv/">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nexura. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Homepagepr;
