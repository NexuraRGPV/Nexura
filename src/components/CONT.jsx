import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.containerBg} id="Contact">
    <div className={styles.contactContainer} id="contactCont">
      <h3 className={`${styles.bk} ${styles.heading}`}>Get in touch</h3>
      <p>
        Whether you have a question, feedback, or just want to say hello, feel free to
        reach out. Our team is here to help.
      </p>

      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <img src="/images/phone.png" alt="Phone"/>
          <div className={styles.labls}>
            <strong className={`${styles.bk} ${styles.bfnt}`}>Mobile</strong>
            <p>7477098233</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <img src="/images/Email.png" alt="Email" />
          <div className={styles.labls}>
            <strong className={`${styles.bk} ${styles.bfnt}`}>Mail</strong>
            <p>nexurargpv@gmail.com</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <img src="/images/insta.png" alt="Instagram" />
          <div className={styles.labls}>
            <strong className={`${styles.bk} ${styles.bfnt}`}>Instagram</strong>
            <p>
              <a href="https://www.instagram.com/nexura_rgpv" id="social">
                https://www.instagram.com<br></br>/nexura_rgpv
              </a>
            </p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <img src="/images/Linkdin.png" alt="LinkedIn"/>
          <div className={styles.labls}>
            <strong className={`${styles.bk} ${styles.bfnt}`}>LinkedIn</strong>
            <p>
              <a href="https://www.linkedin.com/company/nexura-rgpv" id="social2">
                https://www.linkedin.com/<br></br>company/nexura-rgpv/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
