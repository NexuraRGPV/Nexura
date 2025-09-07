import React, { useState } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: "What is Nexura, and what services does it offer?",
    answer:
      "Nexura is a student-driven club focused on skill development and hands-on training. We offer services in web development, UI/UX, 3D Modeling and Animation, Parametric Modeling and Simulation, ANSYS training, Public Relations, and Operations."
  },
  {
    question: "What are the eligibility criteria to stay in the club?",
    answer:
      "Members must maintain a minimum CGPA of 6.0, actively participate in projects, and contribute to skill development."
  },
  {
    question: "What is ANSYS, and who can benefit from it?",
    answer:
      "ANSYS is a simulation software used for finite element analysis, computational fluid dynamics, and other engineering applications. It benefits engineers, researchers, and students alike."
  },
  {
    question:
      "After completing the course for Nexura's respective service, what are my options besides teaching others?",
    answer:
      "You can work on real projects, freelance, collaborate with startups, build your portfolio, or explore internship opportunities."
  },
  {
    question:
      "Is this club exclusively for automobile engineering students, or can students from other branches also benefit?",
    answer:
      "Though there is a strong focus on automobile engineering, students from various technical disciplines are welcome, fostering cross-disciplinary innovation."
  },
  {
    question: "How can I join Nexura's club or services?",
    answer:
      "No, Nexura is open to all engineering branches. Anyone interested in technology, design, simulation, or PR and operations can join and benefit."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Do You Have Questions?</h1>
        <p>We have answers (well, most of the times!)</p>
      </header>

      <div className={styles.illustration}>
        <img src="/images/img1.png" alt="FAQ img" />
      </div>

      {/* FAQ section */}
      <section className={styles.faq}>
        {faqData.map((item, index) => (
          <div className={styles.faqItem} key={index}>
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className={styles.arrow}>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>{item.answer}</div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default FAQ;
