import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./card.module.css";

function Card({ image, name, position, description, shouldCrop, imageStyle }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handlePopupContentClick = (e) => e.stopPropagation();

  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showPopup]);

  const popup = (
    <div className={styles.popupBackdrop} onClick={handleClosePopup}>
      <div className={styles.popup} onClick={handlePopupContentClick}>
        <button className={styles.closeBtn} onClick={handleClosePopup}>✖</button>
        <div className={styles.popupImageContainer}>
          <img src={image} alt={name} style={imageStyle} />
        </div>
        <div className={styles.popupContent}>
          <h2>{name}</h2>
          <h4>{position}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={`${styles.imageContainer} ${shouldCrop ? styles.cropped : ""}`}>
          <img src={image} alt={name} style={imageStyle} />
        </div>
        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>

      {showPopup && ReactDOM.createPortal(popup, document.body)}
    </>
  );
}

export default Card;
