import React, { useState } from "react";
import styles from "../assets/TeamSectionpr.module.css"; 
import TeamMember from "./membercardspr";
import Ansh from "../assets/pr1/Ansh Sir.jpg";
import Harshit from "../assets/pr1/Harshit Sir.jpg";
import Om from "../assets/pr1/om.jpg";
import Sanskriti from "../assets/pr1/sanskriti.jpg";
import Anushka from "../assets/pr1/AnushkaSharma.jpg"
import Vivek from "../assets/pr1/Vivek.jpg"
import Devendra from "../assets/pr1/Devendra.jpeg"
import Mradul from "../assets/pr1/Mradul.jpg"
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    // {
    //   image1: Aryan,
    //   name1: "Aryan Singh",
    //   image2: Yashi,
    //   name2: "Yashi Trivedi",
    // },
  ];

  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
        <TeamMember 
          image1={Ansh}
          name1="Ansh" 
          image2={Harshit}
          name2="Harshit Mishra" 
        />
        <TeamMember 
          image1={Anushka}
          name1="Anushka Sharma" 
          image2={Om}
          name2="Om Chaturvedi" 
        />
        <TeamMember 
          image1={Sanskriti}
          name1="Sanskriti Chaube" 
          image2={Vivek} 
          name2="Vivek Pachori"
        />
        <TeamMember 
          image1={Devendra}
          name1="Devendra Rathore" 
          image2={Mradul}
          name2="Mradul"
        />
      </div>

      {/* Future button toggle for all members */}
      {/* 
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        id="btn"
      >
        {isOpen ? "Show Less" : "Show All Members"}
      </button>
      {isOpen && (
        <div className={styles.content}>
          {members.map((member, index) => (
            <TeamMember 
              key={index}
              image1={member.image1}
              name1={member.name1}
              image2={member.image2}
              name2={member.name2}
            />
          ))}
        </div>
      )} 
      */}
    </div>
  );
};

export default DropDown;
