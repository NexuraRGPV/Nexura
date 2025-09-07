import React from "react";
import styles from "../assets/membercardsUI.module.css"; // Import CSS Module

const TeamMember = ({ image1, name1, image2, name2 }) => {
  return (
    <div className={styles.teamCard}>
      <div className={styles.card1}>
        <img src={image1} alt={name1} className={styles.image} />
        <div>
          <h4 className={styles.name}>{name1}</h4>
        </div>
      </div>
      <div className={styles.card2}>
        <img src={image2} alt={name2} className={styles.image} />
        <div>
          <h4 className={styles.name}>{name2}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
