import React, { useState } from "react";
import styles from "../assets/TeamSection3d.module.css"; 
import TeamMember from "./membercards3d";
import Devendra from "../assets/threed1/Devendra Rathore .jpg";
import Himanshu from "../assets/threed1/Himanshu Bharti.jpg";
import Kunal from "../assets/threed1/Kunal Thakur.jpg";
import Rishi from "../assets/threed1/Rishi Pandey.jpg";

import pawan from "../assets/threed1/pawan.jpg";
import rishabh from "../assets/threed1/Rishabh.jpg";

const DropDown3d = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    {
      image1: Devendra,
      name1: "",
      image2: Himanshu,
      name2: "",
    },
    
    
  ]
  return (
    <div className={styles.dropdown} id="team">
      <div className={styles.mainMembers}>
      <TeamMember 
            image1= {pawan}
            name1="Pawan Soni" 
            image2={rishabh}
            name2="Rishabh" 
          />
          
           <TeamMember
            image1= {Himanshu}
            name1="Himanshu Bharti" 
            image2={Rishi}
            name2="Rishi Pandey"
            />
            <TeamMember
            image1= {Kunal}
            name1="Kunal Thakur"
            image2=""
            name2="Your Spot?" 
            />
          </div>
          {/* <button
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
          )} */}
    </div>
  );
};

export default DropDown3d;
