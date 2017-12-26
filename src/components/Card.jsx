import React from 'react';
import styles from '../../styles/card.css';
import { Link } from 'react-router';

const Card = ({ src, title, name, position }) => (
  <div className={styles.width} styles={{top: position.top, left: position.left}}>
    <div className={`card ${styles['card-container']}`}>
      <img className={`card-img-top ${styles[`profile-pic`]}`} src={src} />
      <div className="card-block">
        <p className={`card-title ${styles['italic']}`}>{title}</p>
        <p className="card-text">{name}</p>
      </div>
    </div>
  </div>
);

export default Card;
