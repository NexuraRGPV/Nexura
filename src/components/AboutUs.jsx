import React from "react";
import { Card } from "./ui/CardTemp.jsx";

import "./aboutUs.css";

const AboutUs = () => {
  const cards = [
    {
      title: "Our Vision",
      description: "To foster innovation and creativity among students.",
    },
    {
      title: "Our Mission",
      description: "Empowering students with practical knowledge and teamwork.",
    },
    {
      title: "Our Values",
      description: "Collaboration, Excellence, and Innovation.",
    },
    {
      title: "Our Team",
      description: "A passionate group of students.",
    },
    {
      title: "Our Goals",
      description: "To achieve excellence in every project.",
    },
  ];

  return (
    <section id="abouts" className="about-section">
      <h2 className="section-title">About Us</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{card.title}</h3>
                </div>
                <div className="flip-card-back">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
