import { useState, useEffect, useRef } from 'react';
import React from 'react';
import css from './ourService.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom"; // ✅ for internal navigation

gsap.registerPlugin(ScrollTrigger);

function OurService() {
    const [data, setData] = useState([]);
    const serviceRef = useRef(null);
    const navigate = useNavigate(); // ✅ initialize navigate

    const dataObject = {
        'UI/UX Design': [
            'User-Centric Design',
            'Wireframing & Prototyping',
            'Visual & Interactive Design',
            'Website design',
            'Mobile & Web UI/UX',
            'Usability Testing & Optimization'
        ],
        'Web Development': [
            'Full-Stack Development',
            'Custom Web Applications',
            'E-Commerce & CMS Solutions',
            'API Integration & Backened Solutions',
            'Responsive & Mobile-Optimized Websites'
        ],
        '3D Modelling And Animation': [
            'High-Quality 3D Models',
            'Photorealistic Rendering',
            'Dynamic Animation & VFX',
            'Product Visualization',
            'Motion Graphic & Explainer Videos'
        ],
        'Parametric Modelling and Simulation': [
            'Advanced CAD Modelling',
            'Finite Element Analysis (FEA)',
            'Engineering Simulations (Stress, Thermal, Motion)'
        ],
        'Public Relations and Operations': [
            'Strategic Communication',
            'Content & Digital Marketing',
            'Brand Reputation Management',
            'Social Media Management',
            'Public Relations & Media Outreach',
            'Event Planning & Coordination',
            'Business Process Automation',
            'Client Engagement Strategies',
            'Performance Analytics & Reporting',
            'Operational Efficiency & Workflow Optimization'
        ]
    };

    useEffect(() => {
        setData(dataObject);

        const containers = serviceRef.current.querySelectorAll(`.${css.container}`);
        containers.forEach((el, i) => {
            gsap.fromTo(el,
                { y: 50, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    ease: "power2.out",
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, []);

    // ✅ Web Dev internal, baaki external
    const redirectLinks = {
        'UI/UX Design': '/uiux',
        'Web Development': '/webdev', // internal route
        '3D Modelling And Animation': '/three_d',
        'Parametric Modelling and Simulation': '/para',
        'Public Relations and Operations': '/pr'
    };

    const Content = () => (
        <>
            {Object.keys(data).map((e, i) => box(data, i))}
        </>
    );

    const box = (props, index) => {
  const title = Object.keys(props)[index];
  const listItems = Object.values(props)[index];

  const handleClick = () => {
    if (redirectLinks[title]) {
      if (redirectLinks[title].startsWith("http")) {
        window.open(redirectLinks[title], "_blank");
      } else {
        navigate(redirectLinks[title]);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      key={title}
      className={css.container}
      onClick={handleClick}
      style={{ cursor: redirectLinks[title] ? "pointer" : "default" }}
    >
      <h2 className={css.deptContainer}>{title}</h2>
      <div className={css.listContainer}>
        <ul className={css.flex}>
          {listItems.map((e, idx) => (
            <li key={idx}>{e}</li>
          ))}
        </ul>
      </div>
      <div className={css.arrow}>
        <div style={{ fontSize: "2rem" }}>{">>"}</div>
      </div>
    </div>
  );
};


    return (
        <div className={css.ourServicesBlock} id="services" ref={serviceRef}>
            <h1>Our Service and Works</h1>
            <div className={css.flexCol}><Content /></div>

            <div className={css.question}>
                <p>
                    Got questions? Reach out to us at
                    <a href='mailto:nexurargpv@gmail.com' style={{ color: "whitesmoke" }}>
                        {' '}nexurargpv@gmail.com
                    </a> or call:
                </p>
                <p><b>Pawan Soni</b> - 7477098233</p>
                <p><b>Astha Pawar</b> - 8305566978</p>
                <p><b>Soumya Shrivastava</b> - 9630012262</p>
            </div>
        </div>
    );
}

export default OurService;
